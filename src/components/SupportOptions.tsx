
import { Link } from "react-router-dom";

const SupportOptions = () => {
  return (
    <section id="support" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-pink-400">Support</span> Options
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-8 hover:border-pink-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">☕</div>
            <h3 className="text-2xl font-bold text-pink-400 mb-2">Support with Coffee</h3>
            <p className="text-3xl font-bold text-white mb-4">₹19.99</p>
            <p className="text-gray-300 mb-6">A small cheer to keep going. Perfect for showing appreciation for the work being done.</p>
            <Link 
              to="/coffee"
              className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
            >
              Buy Coffee
            </Link>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Support Journey</h3>
            <p className="text-3xl font-bold text-white mb-4">₹39.99</p>
            <p className="text-gray-300 mb-6">Fuel open creation and experimentation. Help build the movement forward.</p>
            <Link 
              to="/journey"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Support Journey
            </Link>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">💬</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Book Live Session</h3>
            <p className="text-3xl font-bold text-white mb-4">₹59.99</p>
            <p className="text-gray-300 mb-6">20 mins live exposure for your idea. Get feedback and community insight.</p>
            <Link 
              to="/live-session"
              className="block w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Book Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportOptions;
