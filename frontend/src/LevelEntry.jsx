// src/LevelsEntry.jsx
import React from 'react';
import { useGame } from './context/GameContext';
import GuidedMode from './GuidedMode';
import LevelSelectPage from './pages/LevelSelectPage';

export default function LevelsEntry() {
  const { mode } = useGame(); // angenommen: mode ist "normal" oder "frei"
  if (mode === 'normal') return <GuidedMode />;
  return <LevelSelectPage />;
}
