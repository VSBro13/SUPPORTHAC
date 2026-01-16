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
            <p className="text-gray-300 mb-6">A simple coffee-sized boost that helps keep momentum steady and work moving forward.</p>
            <Link 
              to="/coffee"
              className="block w-full bg-coffee-500 hover:bg-coffee-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-coffee-500/25"
            >
               Coffee
            </Link>
          </div>

<div className="relative bg-gray-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 recommended recommended-yellow">

  <div className="badge badge-yellow text-black-">Most-Supported</div>

  <div className="text-6xl mb-4 text-center">🍪</div>
  <h3 className="text-2xl font-bold text-yellow-400 mb-2">
    Support with a Cookie
  </h3>
  <p className="text-3xl font-bold text-white mb-4">₹39.99</p>
  <p className="text-gray-300 mb-6">
    A light, friendly treat of support to say you enjoyed the work.
  </p>

  <Link
    to="/cookie"
    className="block w-full bg-yellow-600 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25">
    Cookie
  </Link>
</div>



            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">🍜</div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Support with a 2<sup>nd</sup> Cup</h3>
            <p className="text-3xl font-bold text-white mb-4">₹59.99</p>
            <p className="text-gray-300 mb-6">For when one cup isn’t enough and extra energy keeps ideas flowing.</p> <br />
            <Link 
              to="/journey"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25">
              Second Cup
            </Link>
          </div>


        <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">🍮</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Support with a Pudding</h3>
            <p className="text-3xl font-bold text-white mb-4">₹79.99</p>
            <p className="text-gray-300 mb-6">A richer show of appreciation that supports deeper focus and thoughtful creation.</p>
            <Link 
              to="/pudding"
              className="block w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              Pudding
            </Link>
          </div>

<div className="relative bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 hover:border-red-500/40 transition-all duration-300 hover:scale-105 recommended-red">

  <div className="recommended-badge red-badge">Most-Supported</div>

  <div className="text-6xl mb-4 text-center">🥤</div>
  <h3 className="text-2xl font-bold text-red-400 mb-2">
    Support with Extra Fuel
  </h3>
  <p className="text-3xl font-bold text-white mb-4">₹89.99</p>
  <p className="text-gray-300 mb-6">
    Strong support designed to push ideas harder, faster, and further ahead.
  </p>

  <Link
    to="/extra-fuel"
    className="block w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
    Extra Fuel
  </Link>
</div>

<div className="bg-gray-800/50 backdrop-blur-sm border border-nitrous-500/20 rounded-xl p-8 hover:border-nitrous-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">💧</div>
            <h3 className="text-2xl font-bold text-nitrous-400 mb-2">Support with a Nitrous</h3>
            <p className="text-3xl font-bold text-white mb-4">₹99.99</p>
            <p className="text-gray-300 mb-6">Maximum boost for bold ideas, rapid progress, and serious creative momentum.</p>
            <Link 
              to="/nitrous"
              className="block w-full bg-nitrous-400 hover:bg-nitrous-500 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-nitrous-500/25"
            >
              Nitrous
            </Link>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Support;
