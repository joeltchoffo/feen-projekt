// src/components/FairyStatus.jsx
import React from 'react';
import { useProgress } from '../context/ProgressContext';

export default function FairyStatus() {
  const { totalStars, allChaptersCompleted } = useProgress();
  return (
    <div style={{ marginBottom: 20, padding: 12, background: '#1f034d', borderRadius: 10, color: 'white' }}>
      <h3 style={{ margin: '0 0 6px' }}>🧚 Fee befreien</h3>
      <p style={{ margin: '2px 0' }}>Gesammelte Sterne: <strong>{totalStars}</strong></p>
      {allChaptersCompleted ? (
        <div style={{ padding: 8, background: '#22c55e', borderRadius: 6, color: '#000' }}>
          🎉 Die Fee ist befreit!
        </div>
      ) : (
        <p style={{ margin: 0 }}>Schließe alle 12 Kapitel ab, um sie zu retten.</p>
      )}
    </div>
  );
}
