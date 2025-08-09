// src/components/ChapterModal.jsx
import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';

export default function ChapterModal({ chapter, onClose }) {
  const { completeChapter, starsByChapter } = useProgress();
  const [givenStars, setGivenStars] = useState(starsByChapter[chapter.id] || 0);

  const finish = () => {
    completeChapter(chapter.id, givenStars);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
      }}
    >
      <div style={{ background: '#2e204a', padding: 24, borderRadius: 16, maxWidth: 360, width: '100%', color: '#fff' }}>
        <h2 style={{ margin: 0 }}>{chapter.title}</h2>
        <p style={{ marginTop: 8 }}>{chapter.description}</p>

        <div style={{ marginTop: 16 }}>
          <p style={{ margin: 0 }}>Bewerte dieses Kapitel:</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                onClick={() => setGivenStars(n)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 6,
                  background: givenStars === n ? '#f59e0b' : '#4b4b7a',
                  fontWeight: givenStars === n ? 'bold' : 'normal',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {n} Stern{n > 1 ? 'e' : ''}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
          <button onClick={finish} style={{ flex: 1, padding: '10px', borderRadius: 8, background: '#10b981', color: '#fff', border: 'none' }}>
            Abschließen
          </button>
          <button onClick={onClose} style={{ flex: 1, padding: '10px', borderRadius: 8, background: '#6b7280', color: '#fff', border: 'none' }}>
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
