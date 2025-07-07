import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";
import MainLayout from "../components/MainLayout";

export default function ModeSelectPage() {
  const navigate = useNavigate();
  const { selectMode } = useGame();

  const handleSelectMode = (mode) => {
    selectMode(mode);
    setTimeout(() => {
      navigate("/levels"); // funktioniert garantiert nach Context-Update
    }, 0);
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl font-bold text-purple-300 drop-shadow">
          🧭 Wähle deinen Pfad
        </h1>
        <p className="text-purple-200 max-w-md">
          Willst du dich von den Feen führen lassen, oder selbst durch den SQL-Dschungel ziehen?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full max-w-4xl">
          <button
            onClick={() => handleSelectMode("normal")}
            className="p-6 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-xl shadow-lg hover:scale-105 transition transform border border-purple-800 hover:shadow-purple-500/30"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">📜 Geführter Modus</h2>
            <p className="text-purple-100 text-sm">
              Lass dich leiten – Mission für Mission – durch das Reich der SQL-Feen.
            </p>
          </button>

          <button
            onClick={() => handleSelectMode("frei")}
            className="p-6 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl shadow-lg hover:scale-105 transition transform border border-pink-800 hover:shadow-pink-500/30"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">🔮 Freier Modus</h2>
            <p className="text-purple-100 text-sm">
              Hier kannst du frei experimentieren, deine eigenen SQL-Zauber wirken – ganz ohne Anleitung.
            </p>
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
