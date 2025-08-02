import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
  );
  const [user, setUser] = useState(null); // Optional für später (z. B. aus JWT dekodieren)

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem("authToken", token);
    // Optional: JWT dekodieren und User setzen
    // const decoded = jwtDecode(token); setUser(decoded);
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("authToken");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthToken(token);
      // Optional: auch hier User dekodieren
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom Hook für Zugriff im ganzen Projekt
export const useAuth = () => useContext(AuthContext);
