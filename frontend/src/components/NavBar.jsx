import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
  const { authToken, logout } = useContext(AuthContext);

  return (
  <header className="bg-indigo-950 bg-opacity-80 backdrop-blur-md shadow-lg text-white fixed top-0 w-full z-50 px-6 py-3">

    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">🧚 SQL-Abenteuer</div>
      <div className="space-x-4">
        {!authToken ? (
          <>
            <Link to="/" className="hover:underline">Startseite</Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Registrieren</Link>

             <Link to="/play" className="hover:underline">Spielen</Link>
            <Link to="/shop" className="hover:underline">Shop</Link>
            <Link to="/progress" className="hover:underline">Fortschritt</Link>
            <Link to="/health" className="hover:underline">Health</Link>
            <Link to="/profile">Profil</Link>

          </>
        ) : (
          <>
           
            <button onClick={logout} className="ml-2 hover:underline">Abmelden</button>
          </>
        )}
      </div>
    </nav>
  </header>
  );
}
