export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">BetNoma AI</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Live Odds</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Stats</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">Welcome to BetNoma AI</h2>
        <p className="text-lg text-gray-700 mb-6">Smart AI Betting Tools | Live Odds Feed | Match Stats</p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
          Get Started
        </button>
      </section>
    </div>
  );

