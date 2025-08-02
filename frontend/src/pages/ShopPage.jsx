import { useGame } from "../context/GameContext";
import MainLayout from "../components/MainLayout";

export default function ShopPage() {
  const { scrolls, points, buyScroll } = useGame();

  // Beispiel-Scrolls
  const availableScrolls = [
    { id: 1, name: "Scroll of SELECT", description: "Grundlagen der Auswahlzauber", price: 50 },
    { id: 2, name: "Scroll of WHERE", description: "Lerne Bedingungen zu setzen", price: 75 },
    { id: 3, name: "Scroll of JOIN", description: "Verknüpfe magische Tabellen", price: 100 },
  ];

  const handleBuy = (scroll) => {
    if (scrolls.includes(scroll.name)) {
      alert("🧾 Du besitzt diese Schriftrolle bereits.");
      return;
    }
    if (points >= scroll.price) {
      buyScroll(scroll.name, scroll.price);
      alert(`🎉 Du hast "${scroll.name}" erfolgreich gekauft!`);
    } else {
      alert("💸 Nicht genug magische Punkte.");
    }
  };

  return (
    <MainLayout>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-purple-300 drop-shadow mb-2">🏪 Magischer Shop</h1>
        <p className="text-purple-100">Tausche deine Punkte gegen mächtige Schriftrollen.</p>
        <div className="text-sm mt-2 text-purple-400">🪙 Punkte: <strong>{points}</strong></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {availableScrolls.map((scroll) => (
          <div
            key={scroll.id}
            className="bg-[#2e204a] p-5 rounded-xl border border-purple-700 shadow-md hover:shadow-purple-600/40 transition"
          >
            <h2 className="text-xl font-bold text-purple-200 mb-1">{scroll.name}</h2>
            <p className="text-purple-100 text-sm mb-3">{scroll.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-green-300 font-bold">💰 {scroll.price}</span>
              <button
                onClick={() => handleBuy(scroll)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded hover:from-indigo-500 hover:to-purple-500 transition"
              >
                Kaufen
              </button>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
