import { useParams } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../components/MainLayout";
import { useNavigate } from "react-router-dom";


export default function MissionPage() {
  const { level, mission } = useParams();
  const { authToken } = useAuth();
  const [sql, setSql] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);
    setFeedback("");

    try {
      const response = await fetch(`http://localhost:8000/api/mission/${level}/${mission}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ sql }),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data.result); // erwartet Tabelle/Antwort
        setFeedback("🎉 Du hast die Fee befreit!");
      } else {
        setFeedback(data.error || "❌ Leider falsch. Versuch es erneut.");
      }
    } catch (err) {
      setFeedback("⚠️ Serverfehler. Bitte später erneut versuchen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto text-purple-100 space-y-6">
        <h1 className="text-3xl font-bold text-center">🧝 Aufgabe {mission} in Level {level}</h1>

        <div className="bg-[#2a1a40] p-5 rounded-xl border border-purple-700 shadow">
          <p className="mb-2 text-lg">🧙‍♂️ Die Fee flüstert:</p>
          <p className="italic text-purple-300">
            „Nutze SELECT, um alle Zaubertränke zu finden, die grün sind…“
          </p>
        </div>

        <div className="bg-[#1c1232] p-5 rounded-xl border border-purple-700 shadow">
          <label className="block mb-2 font-semibold">💻 Dein SQL-Zauber:</label>
          <textarea
            value={sql}
            onChange={(e) => setSql(e.target.value)}
            className="w-full h-32 p-3 rounded bg-[#2a1f4d] text-white font-mono"
            placeholder="SELECT * FROM ..."
          ></textarea>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded"
          >
            {loading ? "⏳ Auswertung..." : "🪄 Zauber anwenden"}
          </button>

          {feedback && (
            <p className="mt-4 font-semibold text-center text-yellow-300">{feedback}</p>
          )}
        </div>

        {result && (
          <div className="bg-[#2e204a] p-4 rounded border border-purple-700 shadow">
            <h2 className="text-lg font-bold mb-2">📋 Ergebnis:</h2>
            <table className="table-auto w-full text-left text-sm text-purple-100">
              <thead>
                <tr>
                  {Object.keys(result[0] || {}).map((col) => (
                    <th key={col} className="border-b pb-1">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.map((row, idx) => (
                  <tr key={idx}>
                    {Object.values(row).map((val, i) => (
                      <td key={i} className="py-1">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
