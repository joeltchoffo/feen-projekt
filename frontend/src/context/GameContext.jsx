import { createContext, useContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [mode, setMode] = useState(null); // "normal" oder "frei"
  const [points, setPoints] = useState(0);
  const [scrolls, setScrolls] = useState([]); // z. B. ["SUBSTR", "REVERSE"]
  const [completedMissions, setCompletedMissions] = useState([]);

  const selectMode = (selectedMode) => {
    setMode(selectedMode);
    setPoints(0); // oder vom Backend laden
    setScrolls([]);
    setCompletedMissions([]);
  };

  const earnPoints = (amount) => setPoints((prev) => prev + amount);

  const addScroll = (scroll) => {
    if (!scrolls.includes(scroll)) {
      setScrolls((prev) => [...prev, scroll]);
    }
  };
  const buyScroll = (scrollName, price) => {
  if (!scrolls.includes(scrollName)) {
    setPoints((p) => p - price); // falls du Preis mitgibst
    setScrolls((prev) => [...prev, scrollName]);
  }
};


  const markMissionCompleted = (missionId) => {
    if (!completedMissions.includes(missionId)) {
      setCompletedMissions((prev) => [...prev, missionId]);
    }
  };

  return (
    <GameContext.Provider
      value={{
        mode,
        points,
        scrolls,
        completedMissions,
        selectMode,
        earnPoints,
        addScroll,
        markMissionCompleted,
        buyScroll, // Funktion zum Scroll kaufen
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
