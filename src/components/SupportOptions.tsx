import { Link } from "react-router-dom";

const SupportOptions = () => {
  return (
    <section id="support" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-pink-400">Support</span> Options
        </h2>
        
        <div className="grid md:grid-cols-2 gap-2 place-items-center">
          <div className="max-w-sm w-full bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-6xl mb-4 text-center">❤</div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Support </h3>
            <p className="text-gray-300 mb-6">A small cheer to keep going. Perfect for showing appreciation for the work being done.</p>
            <Link 
              to="/support"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
               Support
            </Link>
          </div>

<div className="max-w-sm w-full bg-gray-800/50 cursor-not-allowed pointer-events-none backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 opacity-60 hover:scale-105">
            <div className="text-6xl mb-4 text-center">💬</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">Book Live Session</h3>
            <p className="text-gray-300 mb-6">Coming Soon</p><br />
            <br />
            <Link 
              to="/--"
              className="block w-full  cursor-not-allowed bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
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
