// src/components/Map.jsx
import React from 'react';
import { useProgress } from '../context/ProgressContext';
import ChapterNode from './ChapterNode';

const layout = [
  { id: 1, x: 60, y: 500 },
  { id: 2, x: 180, y: 450 },
  { id: 3, x: 300, y: 500 },
  { id: 4, x: 420, y: 450 },
  { id: 5, x: 540, y: 500 },
  { id: 6, x: 660, y: 450 },
  { id: 7, x: 780, y: 500 },
  { id: 8, x: 900, y: 450 },
  { id: 9, x: 1020, y: 500 },
  { id: 10, x: 1140, y: 450 },
  { id: 11, x: 1260, y: 500 },
  { id: 12, x: 1380, y: 450 },
];

export default function Map({ chapters, onSelect }) {
  const { starsByChapter, isChapterUnlocked } = useProgress();

  return (
    <div style={{ position: 'relative', height: 700, overflowX: 'auto', padding: 16 }}>
      {layout.map((pos) => {
        const chapter = chapters.find((c) => c.id === pos.id);
        if (!chapter) return null;
        const unlocked = isChapterUnlocked(chapter);
        const stars = starsByChapter[chapter.id] || 0;
        return (
          <ChapterNode
            key={chapter.id}
            chapter={chapter}
            unlocked={unlocked}
            stars={stars}
            onClick={() => onSelect(chapter)}
            style={{ left: pos.x, top: pos.y }}
          />
        );
      })}
    </div>
  );
}
