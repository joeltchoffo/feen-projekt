import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../components/MainLayout";
import { getPlayerProgress } from "../api/progress";
//import { useNavigate } from "react-router-dom";


export default function ProgressPage() {
  const { authToken } = useAuth();
  const [loading, setLoading] = useState(true);
 // const navigate = useNavigate();
  const [progress, setProgress] = useState({
    mode: "",
    points: 0,
    scrolls: [],
    completed_missions: [],
  });

  useEffect(() => {

   /* if (!authToken) {
      navigate("/login");
      return;
    }
      */
    const fetchProgress = async () => {
      try {
        const data = await getPlayerProgress(authToken);
        setProgress(data);
      } catch (err) {
        console.error("Fehler beim Laden des Fortschritts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProgress();
  }, [authToken]);

  if (loading) return <MainLayout><p className="text-center text-purple-200">🔄 Lade Fortschritt...</p></MainLayout>;

  return (
    <MainLayout>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-purple-300 drop-shadow mb-2">📊 Fortschritt</h1>
        <p className="text-purple-100">Dein aktueller Stand in der magischen Welt der SQL-Feen.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Modus & Punkte */}
        <div className="bg-[#2e204a] p-5 rounded-xl border border-purple-700 shadow-md">
          <h2 className="text-xl font-semibold text-purple-200 mb-2">🧭 Spielmodus</h2>
          <p className="text-purple-100 mb-4">
            Aktiver Pfad: <span className="font-bold">{progress.mode || "Nicht gewählt"}</span>
          </p>
          <h2 className="text-xl font-semibold text-purple-200 mb-2">💰 Punkte</h2>
          <p className="text-green-300 text-lg font-bold">{progress.points}</p>
        </div>

        {/* Scrolls */}
        <div className="bg-[#2e204a] p-5 rounded-xl border border-purple-700 shadow-md">
          <h2 className="text-xl font-semibold text-purple-200 mb-2">📜 Gekaufte Schriftrollen</h2>
          {progress.scrolls.length > 0 ? (
            <ul className="list-disc list-inside text-purple-100 space-y-1">
              {progress.scrolls.map((s) => <li key={s}>{s}</li>)}
            </ul>
          ) : (
            <p className="text-purple-400">Keine Schriftrollen erworben</p>
          )}
        </div>

        {/* Missionen */}
        <div className="md:col-span-2 bg-[#2e204a] p-5 rounded-xl border border-purple-700 shadow-md">
          <h2 className="text-xl font-semibold text-purple-200 mb-2">✅ Abgeschlossene Missionen</h2>
          {progress.completed_missions.length > 0 ? (
            <ul className="list-disc list-inside text-purple-100 space-y-1">
              {progress.completed_missions.map((m) => <li key={m}>Mission {m}</li>)}
            </ul>
          ) : (
            <p className="text-purple-400">Noch keine Mission abgeschlossen</p>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
