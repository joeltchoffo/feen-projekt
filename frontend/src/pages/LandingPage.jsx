import { Parallax } from "react-scroll-parallax";
import bgBack from "../assets/avatar.jpg";
import bgMid from "../assets/datenbank.jpg";
import bgFront from "../assets/lanscape.jpg";
// Oder verwende deine eigenen Bildpfade

export default function LandingPage() {
  return (
    <div className="text-white font-sans">

      {/* Header 
      <header className="absolute z-50 w-full top-0 left-0 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
        <h1 className="text-2xl font-bold">🧚 SQL-Abenteuer</h1>
        <nav className="space-x-4 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#ablauf" className="hover:underline">Ablauf</a>
          <a href="/login" className="hover:text-pink-400">Anmelden</a>
          <a href="/register" className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-white">Jetzt starten</a>
        </nav>
      </header>
      */}

      {/* Hero Section mit Parallax */}
      <section className="relative h-screen overflow-hidden mt-20">
        {/* Parallax Layer */}
        <Parallax speed={-20}>
          <img src={bgBack} alt="Hintergrund" className="absolute top-0 left-0 w-full h-auto z-0" />
        </Parallax>
        <Parallax speed={-10}>
          <img src={bgMid} alt="Mittelschicht" className="absolute top-0 left-0 w-full h-auto z-10" />
        </Parallax>
        <Parallax speed={-5}>
          <img src={bgFront} alt="Vordergrund" className="absolute top-0 left-0 w-full h-auto z-20" />
        </Parallax >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-30" />

        {/* Hero Content */}
        <div className="relative z-40 flex flex-col justify-center items-center h-full text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg font-fantasy">
            SQL-Abenteuer: Die Rettung der Feen
          </h2>
          <p className="max-w-xl mt-4 text-lg text-slate-200 drop-shadow">
            Löse SQL-Rätsel, sammle Zauberwörter und rette die Feen in einer magischen Datenbankwelt.
          </p>
          <a
            href="/register"
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg"
          >
            Jetzt starten
          </a>
          <a href="#features" className="mt-2 text-white underline hover:text-pink-300">
            Mehr erfahren
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-slate-900">
        <h3 className="text-3xl font-bold text-center mb-12">Was erwartet dich?</h3>
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto text-center">
          <Feature title="🧙 Magisches SQL-Abenteuer" desc="Tauche ein in eine Story voller Rätsel und Datenzauber." />
          <Feature title="📊 Echtes Datenbanktraining" desc="Übe mit realistischen SQL-Queries auf Oracle-Basis." />
          <Feature title="🎮 Zwei Spielmodi" desc="Klassisch mit Punkten oder frei zum Üben – du entscheidest." />
          <Feature title="📜 Zauberwörter freischalten" desc="Verdiene dir mächtige SQL-Schlüsselwörter im Spiel." />
        </div>
      </section>

      {/* Spielablauf */}
      <section id="ablauf" className="py-20 px-6 bg-indigo-950">
        <h3 className="text-3xl font-bold text-center mb-10">So funktioniert das Spiel</h3>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate-300 leading-relaxed">
          <Step num="1" text="Erstelle einen Account – kostenlos und sicher." />
          <Step num="2" text="Wähle einen Spielmodus: normal oder frei." />
          <Step num="3" text="Löse Aufgaben mit SQL-Befehlen – je schwerer, desto mehr Punkte!" />
          <Step num="4" text="Nutze Punkte, um neue Zauberwörter zu kaufen und schwierige Aufgaben zu meistern." />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-6 text-center text-sm text-slate-400">
        <p>&copy; 2025 SQL-Abenteuer. Alle Rechte vorbehalten.</p>
        <div className="mt-2 space-x-4">
          <a href="/impressum" className="hover:underline">Impressum</a>
          <a href="/datenschutz" className="hover:underline">Datenschutz</a>
        </div>
      </footer>
    </div>
  );
}

// Feature-Block
function Feature({ title, desc }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-slate-300">{desc}</p>
    </div>
  );
}

// Step-Block
function Step({ num, text }) {
  return (
    <div className="flex items-start">
      <div className="text-pink-400 font-bold text-2xl mr-4">{num}.</div>
      <p>{text}</p>
    </div>
  );
}