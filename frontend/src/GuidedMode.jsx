// src/GuidedMode.jsx
import React, { useState } from 'react';
import { useChapters } from './hooks/useChapters';
import { ProgressProvider } from './context/ProgressContext';
import Map from './components/Map';
import ChapterModal from './components/ChapterModal';
import FairyStatus from './components/FairyStatus';
import { useAuth } from './context/AuthContext';
import MainLayout from './components/MainLayout';

export default function GuidedMode() {
 // const { authToken } = useAuth();
  const { chapters, loading, error } = useChapters();
  const [selected, setSelected] = useState(null);

 // if (!authToken) return <MainLayout><div>Bitte einloggen.</div></MainLayout>;
  if (loading) return <MainLayout><div>Lade Kapitel …</div></MainLayout>;
  if (error) return <MainLayout><div style={{ color: 'salmon' }}>Fehler: {error.message}</div></MainLayout>;
  if (!chapters) return <MainLayout><div>Keine Kapitel verfügbar.</div></MainLayout>;

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold text-purple-300 mb-2">🧚 Geführter Modus</h1>
        <p className="mb-6 text-gray-300">Folge dem Pfad, schließe Kapitel ab und befreie die Fee.</p>

        <ProgressProvider chapters={chapters}>
          <FairyStatus />
          <Map chapters={chapters} onSelect={setSelected} />
          {selected && <ChapterModal chapter={selected} onClose={() => setSelected(null)} />}
        </ProgressProvider>
      </div>
    </MainLayout>
  );
}
