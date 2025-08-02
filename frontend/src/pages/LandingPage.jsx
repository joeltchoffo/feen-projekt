import heroBg from "../assets/lanscape_perspective_grid.jpg"; // du kannst hier auch URL nehmen

export default function LandingPage() {
  return (
    <div className="text-white font-sans">

      {/* Header */}
        <h1 className="text-2xl font-bold">🧚 SQL-Abenteuer</h1>
        <nav className="space-x-4 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#ablauf" className="hover:underline">Ablauf</a>
          <a href="/login" className="hover:text-pink-400">Anmelden</a>
          <a href="/register" className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-white">Jetzt starten</a>
        </nav>


      {/* Hero Section */}
      <section
        className="mt-4 flex gap-4 h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >

   

        <h2 className="text-4xl font-fantasy md:text-5xl font-extrabold drop-shadow-lg">SQL-Abenteuer: Die Rettung der Feen</h2>
        <p className="max-w-xl mt-4 text-lg text-slate-200 drop-shadow">
          Löse SQL-Rätsel, sammle Zauberwörter und rette die Feen in einer magischen Datenbankwelt.
        </p>
        <a
          href="/register"
          className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg"
        >
          Jetzt starten
        </a>
         <a href="#features" className="text-white underline hover:text-pink-300">
            Mehr erfahren
  </a>
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

function Feature({ title, desc }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-slate-300">{desc}</p>
    </div>
  );
}

function Step({ num, text }) {
  return (
    <div className="flex items-start">
      <div className="text-pink-400 font-bold text-2xl mr-4">{num}.</div>
      <p>{text}</p>
    </div>
  );
}
