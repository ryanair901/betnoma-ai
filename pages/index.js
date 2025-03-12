// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-500">BetNoma AI</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:text-blue-400">Features</a>
          <a href="#" className="hover:text-blue-400">Pricing</a>
          <a href="#" className="hover:text-blue-400">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Smart Betting Powered by AI
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Discover smart predictions, match stats, and live odds – all in one AI-driven platform.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold">
          Get Started
        </button>
      </section>
    </div>
  );
}
