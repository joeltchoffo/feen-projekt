import NavBar from "./NavBar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#120a29] via-[#1e103f] to-[#29185e] text-white font-serif flex flex-col">
      
      {/* 🌌 Navigation oben */}
      <NavBar />

      {/* 🧾 Hauptinhalt mit magischem Rahmen */}
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 pt-28 pb-16"> {/* pt-28 wegen fixed Nav */}
        <div className="bg-[#1c1237] border border-purple-800 rounded-3xl shadow-2xl p-8 backdrop-blur-md relative">
          {/* Glimmende Ecke optional */}
          <div className="absolute top-0 left-0 w-4 h-4 bg-pink-500 rounded-full shadow-lg animate-pulse" />
          {children}
        </div>
      </main>

      {/* ✨ Footer unten */}
      <Footer />
    </div>
  );
}
