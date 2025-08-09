// src/hooks/useChapters.jsx (angepasst für Demo ohne Backend)
import { useState, useEffect } from 'react';
import { getMissions } from '../api/missions'; // optional: bleibt ungenutzt, wenn kein authToken
import { useAuth } from '../context/AuthContext';

const makeDummyChapters = () =>
  Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Kapitel ${i + 1}`,
    description: `Demo-Beschreibung für Kapitel ${i + 1}`,
    prerequisites: i === 0 ? [] : [i], // linear
    maxStars: 3,
  }));

export function useChapters() {
  const { authToken } = useAuth();
  const [chapters, setChapters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Wenn kein Backend / kein Token: sofort Dummy liefern
    if (!authToken) {
      setChapters(makeDummyChapters());
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    getMissions(authToken)
      .then((data) => {
        if (cancelled) return;
        const raw = Array.isArray(data) ? data : data.missions || [];
        const normalized = raw.slice(0, 12).map((m, idx) => ({
          id: m.id ?? idx + 1,
          title: m.title || m.name || `Kapitel ${idx + 1}`,
          description: m.description || m.summary || '',
          prerequisites: m.prerequisites ?? (idx === 0 ? [] : [raw[idx - 1]?.id ?? idx]),
          maxStars: m.maxStars ?? 3,
          raw: m,
        }));
        setChapters(normalized);
      })
      .catch((e) => {
        if (!cancelled) {
          // Fallback auf Dummy, falls Request scheitert
          setChapters(makeDummyChapters());
          setError(e);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [authToken]);

  return { chapters, loading, error };
}
