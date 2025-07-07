import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../components/MainLayout";

const tests = [
  { id: "backend",  label: "Backend erreichbar",   path: "/health/" },
  { id: "progress", label: "Progress-Endpoint",    path: "/progress/" },
];

export default function HealthCheckPage() {
  const { authToken } = useAuth();
  const [status, setStatus] = useState({});   // { backend: "pending" | "ok" | "fail", … }

  useEffect(() => {
    (async () => {
      for (const t of tests) {
        try {
          const res = await fetch(import.meta.env.VITE_API_URL + t.path, {
            headers: authToken ? { Authorization: `Bearer ${authToken}` } : {},
          });
          setStatus(s => ({ ...s, [t.id]: res.ok ? "ok" : "fail" }));
        } catch {
          setStatus(s => ({ ...s, [t.id]: "fail" }));
        }
      }
    })();
  }, [authToken]);

  const pill = state => ({
    ok:   "bg-green-600",
    fail: "bg-red-600",
    pending: "bg-gray-500 animate-pulse",
  }[state ?? "pending"]);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-purple-300 mb-6">🩺 Front-End-Health-Check</h1>

      <ul className="space-y-4">
        {tests.map(t => (
          <li key={t.id} className="flex items-center justify-between bg-[#22173d] p-4 rounded-xl">
            <span>{t.label}</span>
            <span className={`px-3 py-1 rounded-full text-sm ${pill(status[t.id])}`}>
              {status[t.id] ?? "…"}
            </span>
          </li>
        ))}

        <li className="flex items-center justify-between bg-[#22173d] p-4 rounded-xl">
          <span>JWT im LocalStorage</span>
          <span className={`px-3 py-1 rounded-full text-sm ${pill(authToken ? "ok" : "fail")}`}>
            {authToken ? "vorhanden" : "fehlt"}
          </span>
        </li>
      </ul>
    </MainLayout>
  );
}
