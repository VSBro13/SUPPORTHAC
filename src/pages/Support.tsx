import { Link } from "react-router-dom";

const Support = () => {
  return (
    <section id="support" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-pink-400">Support</span> Options
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-coffee-500/20 rounded-xl p-8 hover:border-coffee-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">☕</div>
            <h3 className="text-2xl font-bold text-coffee-400 mb-2">Support with a Coffee</h3>
            <p className="text-3xl font-bold text-white mb-4">₹19.99</p>
            <p className="text-gray-300 mb-6">A small cheer to keep going. Perfect for showing appreciation for the work being done.</p>
            <Link 
              to="/coffee"
              className="block w-full bg-coffee-500 hover:bg-coffee-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-coffee-500/25"
            >
               Coffee
            </Link>
          </div>

<div className="bg-gray-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">🍪</div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Support with a Cookie</h3>
            <p className="text-3xl font-bold text-white mb-4">₹39.99</p>
            <p className="text-gray-300 mb-6">15 mins live exposure for your idea. Get feedback and community insight.</p>
            <Link 
              to="/cookie"
              className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25"
            >
              Cookie  
            </Link>
          </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">🍜</div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Support with a Second Cup</h3>
            <p className="text-3xl font-bold text-white mb-4">₹59.99</p>
            <p className="text-gray-300 mb-6">Fuel open creation and experimentation. Help build the movement forward.</p>
            <Link 
              to="/journey"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
              Second Cup
            </Link>
          </div>
          
<div className="bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 hover:border-red-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">🥤</div>
            <h3 className="text-2xl font-bold text-red-400 mb-2">Support with a Extra Fuel</h3>
            <p className="text-3xl font-bold text-white mb-4">₹69.99</p>
            <p className="text-gray-300 mb-6">When encouragement isn’t enough, this pushes ideas forward.</p>
            <Link 
              to="/fuel"
              className="block w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
            >
              Extra Fuel 
            </Link>
          </div>
<div className="bg-gray-800/50 backdrop-blur-sm border border-nitrous-500/20 rounded-xl p-8 hover:border-nitrous-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">💧</div>
            <h3 className="text-2xl font-bold text-nitrous-400 mb-2">Support with a Nitrous</h3>
            <p className="text-3xl font-bold text-white mb-4">₹79.99</p>
            <p className="text-gray-300 mb-6">When encouragement isn’t enough, this pushes ideas forward.</p>
            <Link 
              to="/nitrous"
              className="block w-full bg-nitrous-500 hover:bg-nitrous-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-nitrous-500/25"
            >
              Nitrous
            </Link>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">💬</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Book Live Session</h3>
            <p className="text-3xl font-bold text-white mb-4">₹69.99</p>
            <p className="text-gray-300 mb-6">15 mins live exposure for your idea. Get feedback and community insight.</p>
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

export default Support;
