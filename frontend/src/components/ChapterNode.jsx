// src/components/ChapterNode.jsx
import React from 'react';

export default function ChapterNode({ chapter, unlocked, stars, onClick, style }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: 90,
        height: 90,
        borderRadius: '50%',
        background: unlocked ? '#8b5cf6' : '#444',
        border: '3px solid white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        cursor: unlocked ? 'pointer' : 'not-allowed',
        padding: 6,
        boxShadow: '0 0 12px rgba(255,255,255,0.2)',
        ...style,
      }}
      onClick={unlocked ? onClick : undefined}
    >
      <div style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center' }}>{chapter.title}</div>
      <div style={{ marginTop: 4 }}>
        {[1, 2, 3].map((n) => (
          <span key={n} style={{ opacity: stars >= n ? 1 : 0.2, marginRight: 2 }}>
            ★
          </span>
        ))}
      </div>
      {!unlocked && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
          }}
        >
          🔒
        </div>
      )}
    </div>
  );
}
