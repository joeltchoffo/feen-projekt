// src/pages/ProfilePage.jsx
import React, { useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";
import MainLayout from "../components/MainLayout";

export default function ProfilePage() {
  const { authToken, user } = useAuth();
  const {
    starsByChapter = {},
    totalStars = 0,
    allChaptersCompleted = false,
    resetProgress,
  } = useProgress();

  const displayName = user?.displayName || "Spieler";
  const avatarUrl = user?.avatarUrl || "/default-avatar.png";

  const completedCount = Object.values(starsByChapter).filter((s) => s > 0)
    .length;

  // einfache Level-Berechnung: je 5 Sterne ein Level
  const level = Math.floor(totalStars / 5) + 1;

  // XP für nächste Stufe
  const currentXP = totalStars % 5;
  const neededXP = 5;
  const xpPercent = (currentXP / neededXP) * 100;

  const recentActivity = useMemo(() => {
    return Object.entries(starsByChapter)
      .filter(([, stars]) => stars > 0)
      .sort((a, b) => Number(b[0]) - Number(a[0]))
      .slice(0, 5)
      .map(([id, stars]) => ({
        chapterId: id,
        stars,
        title: `Kapitel ${id}`,
        when: "vor kurzem",
      }));
  }, [starsByChapter]);

  return (
    <MainLayout>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24, color: "#f0f0f0" }}>
        {/* Header */}
        <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 30 }}>
          <div>
            <img
              src={avatarUrl}
              alt="Avatar"
              style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h1 style={{ margin: 0 }}>{displayName}</h1>
            <p style={{ margin: "4px 0" }}>Level: <strong>{level}</strong></p>
            <div style={{ width: 200, background: "#333", borderRadius: 8, overflow: "hidden", height: 12 }}>
              <div
                style={{
                  width: `${xpPercent}%`,
                  background: "#8b5cf6",
                  height: "100%",
                  transition: "width .3s",
                }}
              />
            </div>
            <p style={{ margin: "4px 0" }}>
              Sterne: {totalStars} · Kapitel abgeschlossen: {completedCount} / 12
            </p>
            {allChaptersCompleted ? (
              <div style={{ padding: 6, background: "#22c55e", borderRadius: 6, display: "inline-block" }}>
                🧚 Fee befreit!
              </div>
            ) : (
              <div>🧚 Noch {12 - completedCount} Kapitel bis zur Befreiung</div>
            )}
          </div>
          <div>
            <button
              onClick={resetProgress}
              style={{
                padding: "8px 16px",
                background: "#d946ef",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                color: "white",
              }}
            >
              Fortschritt zurücksetzen
            </button>
          </div>
        </div>

        {/* Letzte Aktivität */}
        <div style={{ marginBottom: 30 }}>
          <h2>Letzte Aktivität</h2>
          <ul>
            {recentActivity.length > 0 ? (
              recentActivity.map((act) => (
                <li key={act.chapterId}>
                  {act.title} – {act.stars} Sterne ({act.when})
                </li>
              ))
            ) : (
              <li>Keine Aktivität vorhanden.</li>
            )}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
