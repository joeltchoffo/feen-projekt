export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#120a29] via-[#1e103f] to-[#29185e] text-white font-serif flex flex-col items-center">
      <div className="w-full max-w-5xl p-6">
        {/* Zauberhafter Rahmen */}
        <div className="bg-[#1c1237] border border-purple-800 rounded-3xl shadow-xl p-8 backdrop-blur-md">
          {children}
        </div>
      </div>
    </div>
  );
}
