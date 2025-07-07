import MainLayout from "../components/MainLayout";
import { useGame } from "../context/GameContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LevelSelectPage() {
  const { mode } = useGame();
  const navigate = useNavigate();

  const handleMissionClick = (level, mission) => {
    navigate(`/mission/${level}/${mission}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-purple-300 mb-4 tracking-wide drop-shadow">
        🧚 Kapitel 1: Die verschwundenen Feen
      </h1>
      <p className="text-lg text-purple-100 mb-6">
        Deine Reise beginnt! Nutze dein Wissen über SQL, um die magischen Feen zu befreien.
      </p>

      <div className="space-y-4">
        <button
          onClick={() => handleMissionClick(1, 1)}
          className="w-full p-4 bg-gradient-to-r from-violet-700 to-purple-600 hover:from-violet-600 hover:to-purple-500 text-white rounded-xl shadow-lg transition hover:scale-105"
        >
          🔍 Aufgabe 1: SELECT-Grundlagen
        </button>

        <button
          onClick={() => handleMissionClick(1, 2)}
          className="w-full p-4 bg-gradient-to-r from-violet-700 to-purple-600 hover:from-violet-600 hover:to-purple-500 text-white rounded-xl shadow-lg transition hover:scale-105"
        >
          ✨ Aufgabe 2: WHERE-Bedingungen
        </button>
      </div>
    </MainLayout>
  );
}
