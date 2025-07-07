
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const JourneySupport = () => {
  const handlePayment = () => {
    alert("Thank you for fueling the journey! 🚀");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Navbar />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Link 
            to="/" 
            className="inline-block text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🚀 <span className="text-blue-400">Support the Journey</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            ₹39.99 – Fuel open creation.
          </p>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Fuel the Mission</h2>
              <p className="text-gray-300 mb-2">
                Support the open creation movement and help build something meaningful together.
              </p>
              <p className="text-red-400 text-sm">
                ⚠️ This donation is non-refundable
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-4">UPI Payment</h3>
                <div className="bg-gray-700/50 p-6 rounded-lg text-center">
                  <div className="w-32 h-32 bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-400">QR Code</span>
                  </div>
                  <p className="text-blue-400 font-mono">Scan to Pay</p>
                  <p className="text-sm text-gray-400 mt-2">₹39.99</p>
                </div>
              </div>
              
              <button
                onClick={handlePayment}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Pay ₹39.99 Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySupport;
