export default function Footer() {
  return (
    <footer className="bg-slate-800 py-6 text-center text-sm text-slate-400 mt-10">
      <p>&copy; 2025 SQL-Abenteuer. Alle Rechte vorbehalten.</p>
      <div className="mt-2 space-x-4">
        <a href="/impressum" className="hover:underline">Impressum</a>
        <a href="/datenschutz" className="hover:underline">Datenschutz</a>
      </div>
    </footer>
  );
}
