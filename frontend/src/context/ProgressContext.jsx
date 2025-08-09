// src/context/ProgressContext.jsx
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { getPlayerProgress } from '../api/progress';
import { useAuth } from './AuthContext';

const STORAGE_KEY = 'guidedProgress';
const ProgressContext = createContext();

export function ProgressProvider({ children, chapters }) {
  const { authToken } = useAuth();
  const [starsByChapter, setStarsByChapter] = useState({});
  const [loadedFromServer, setLoadedFromServer] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setStarsByChapter(parsed.starsByChapter || {});
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ starsByChapter }));
  }, [starsByChapter]);

  useEffect(() => {
    if (!authToken || loadedFromServer) return;
    getPlayerProgress(authToken)
      .then((data) => {
        const serverStars = data.starsByChapter || data.progress || {};
        setStarsByChapter((prev) => ({ ...prev, ...serverStars }));
      })
      .catch(() => {
        // fallback: lokal bleiben
      })
      .finally(() => setLoadedFromServer(true));
  }, [authToken, loadedFromServer]);

  const completeChapter = (id, stars) => {
    setStarsByChapter((prev) => {
      const existing = prev[id] || 0;
      return { ...prev, [id]: Math.max(existing, stars) };
    });
    // TODO: Sync zurück ans Backend, wenn unterstützt
  };

  const isChapterUnlocked = (chapter) => {
    if (!chapter) return false;
    const prereqs = chapter.prerequisites || [];
    if (prereqs.length === 0) return true;
    return prereqs.every((pid) => (starsByChapter[pid] || 0) > 0);
  };

  const totalStars = useMemo(
    () => Object.values(starsByChapter).reduce((a, b) => a + b, 0),
    [starsByChapter]
  );

  const allChaptersCompleted = useMemo(
    () => chapters?.every((c) => (starsByChapter[c.id] || 0) > 0),
    [chapters, starsByChapter]
  );
  const resetProgress = () => {
  setStarsByChapter({});
  localStorage.removeItem(STORAGE_KEY);
};


  return (
    <ProgressContext.Provider
      value={{
        starsByChapter,
        completeChapter,
        isChapterUnlocked,
        totalStars,
        allChaptersCompleted,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
