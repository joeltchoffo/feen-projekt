import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import MainLayout from "../components/MainLayout";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(username, password);
      alert("🎉 Registrierung erfolgreich! Willkommen im Reich der Feen.");
      navigate("/login");
    } catch (error) {
      console.error("Fehler bei Registrierung:", error.response?.data);
      alert(
        error.response?.data?.error ||
        "❌ Registrierung fehlgeschlagen. Bitte überprüfe deine Eingaben."
      );
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl font-bold text-purple-300 drop-shadow">
          🧾 Neues Profil erstellen
        </h1>
        <p className="text-purple-200 max-w-md">
          Wähle mit Bedacht deinen Namen, junger Lehrling. Er wird dich durch dein SQL-Abenteuer begleiten.
        </p>

        <form
          onSubmit={handleRegister}
          className="w-full max-w-sm bg-[#2a1b4d] rounded-xl p-6 shadow-md space-y-4 border border-purple-700"
        >
          <input
            type="text"
            placeholder="👤 Name wählen"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 bg-[#1c1237] text-white placeholder-purple-400 rounded-lg border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="password"
            placeholder="🔒 Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-[#1c1237] text-white placeholder-purple-400 rounded-lg border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2 rounded-lg shadow hover:from-indigo-500 hover:to-purple-500 transition"
          >
            ✨ Registrieren
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
