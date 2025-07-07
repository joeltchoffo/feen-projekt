import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * Blockt alle Kinder-Routen, solange kein gültiges JWT vorhanden ist.
 * Der <Outlet/> rendert die „eigentlichen“ Seiten.
 */
export default function PrivateRoute() {
  const { authToken } = useAuth();
  return authToken ? <Outlet /> : <Navigate to="/login" replace />;
}
