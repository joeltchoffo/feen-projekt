import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { GameProvider } from "./context/GameContext";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ModeSelectPage from "./pages/ModeSelectPage";
import LevelSelectPage from "./pages/LevelSelectPage";
import MissionPage from "./pages/MissionPage";
import ShopPage from "./pages/ShopPage";
import ProgressPage from "./pages/ProgressPage";
import NavBar from "./components/NavBar";
import HealthCheckPage from "./pages/HealthCheckPage";
import LandingPage from "./pages/LandingPage";
import LevelsEntry from './LevelEntry';
import GuidedMode from './GuidedMode'; // 
import ProfilePage from './pages/ProfilePage';
import { ProgressProvider } from "./context/ProgressContext";

import { ParallaxProvider } from 'react-scroll-parallax';

export default function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <ProgressProvider chapters={Array.from({ length: 12 }, (_, i) => ({ id: (i + 1).toString() }))}>
          <Router>
            <NavBar />
            <Routes>

              <Route
                path="/"
                element={
                  <ParallaxProvider>
                    <LandingPage />
                  </ParallaxProvider>
                }
              />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route path="/play" element={<ModeSelectPage />} />

              <Route path="/levels" element={<GuidedMode />} />

              {/* <Route path="/levels" element={<LevelSelectPage />} /> 
            <Route path="/levels" element={<PrivateRoute />}>
              <Route index element={<LevelsEntry />} />
            </Route>
              */}

              <Route path="/mission/:level/:mission" element={<MissionPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/progress" element={<ProgressPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/health" element={<HealthCheckPage />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Router>
        </ProgressProvider>

      </GameProvider>
    </AuthProvider>
  );
}
