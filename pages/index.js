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
}
{/* Features Section */}
<section className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-3xl font-semibold text-gray-800 mb-12">Why Choose BetNoma AI?</h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Feature 1 */}
      <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h4 className="text-xl font-bold mb-2 text-blue-700">Live Odds Feed</h4>
        <p className="text-gray-600">Get real-time odds from top bookmakers, all in one place.</p>
      </div>

      {/* Feature 2 */}
      <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h4 className="text-xl font-bold mb-2 text-blue-700">AI-Powered Predictions</h4>
        <p className="text-gray-600">Access advanced predictions powered by machine learning models.</p>
      </div>

      {/* Feature 3 */}
      <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h4 className="text-xl font-bold mb-2 text-blue-700">Match Statistics</h4>
        <p className="text-gray-600">View de

