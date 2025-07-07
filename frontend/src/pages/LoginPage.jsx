import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../api/auth";
import MainLayout from "../components/MainLayout";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, password);
      login(data.access); // Speichere im AuthContext
      navigate("/play");
    } catch (error) {
      alert("🛑 Login fehlgeschlagen!");
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl font-bold text-purple-300 drop-shadow">
          🧚 Login zum SQL-Reich
        </h1>
        <p className="text-purple-200 max-w-md">
          Gib deinen Namen und dein Geheimwort ein, um dich in die magische Konsole einzuloggen.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-[#2a1b4d] rounded-xl p-6 shadow-md space-y-4 border border-purple-700"
        >
          <input
            type="text"
            placeholder="👤 Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 bg-[#1c1237] text-white placeholder-purple-400 rounded-lg border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="password"
            placeholder="🔒 Geheimwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-[#1c1237] text-white placeholder-purple-400 rounded-lg border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2 rounded-lg shadow hover:from-indigo-500 hover:to-purple-500 transition"
          >
            ✨ Einloggen
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
