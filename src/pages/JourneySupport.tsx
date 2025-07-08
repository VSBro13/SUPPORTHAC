import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import BackToTop from "@/components/BackToTop";

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

const JourneySupport = () => {
  const [code, setCode] = useState(generateCode());
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    alert(`Thank you for fueling the journey! 🚀\n\nPlease put the generated code in the field 'add note' while paying.\nYour code: ${code}`);
    setLoading(true);
    try {
      // Send code to backend API for logging (and Google Sheets)
      await fetch('/api/log-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'journey', code }),
      });
    } catch (err) {
      alert('Failed to log your code. Please try again later.');
    }
    setLoading(false);
    setCode(generateCode());
  };

  return (
    <div className="h-screen min-h-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white text-sm sm:text-base flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4">
        <div className="w-full max-w-md animate-slide-up">
          <Link 
            to="/" 
            className="inline-block text-blue-400 hover:text-blue-300 mb-2 transition-colors animate-pop"
          >
            ← Back to Home
          </Link>
          {/* Warning Banner */}
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-2 mb-2 animate-fade-in">
            <p className="text-red-400 font-semibold text-xs text-center">
              ⚠️ Journey support contributions are non-refundable.
            </p>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center animate-pop">
            🚀 <span className="text-blue-400">Support the Journey</span>
          </h1>
          <p className="text-base text-gray-300 mb-3 text-center animate-fade-in">
            ₹39.99 – Fuel open creation.
          </p>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-4 animate-slide-up shadow-xl">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2 animate-pop">🚀</div>
              <h2 className="text-lg font-bold text-blue-400 mb-2 animate-fade-in">Fuel the Mission</h2>
              <p className="text-gray-300 mb-1 animate-fade-in">
                Support the open creation movement.
              </p>
              <p className="text-red-400 text-xs animate-fade-in">
                ⚠️ Non-refundable
              </p>
            </div>
            <div className="space-y-2">
              <div>
                <h3 className="text-base font-semibold text-blue-400 mb-2 animate-pop">UPI Payment</h3>
                <div className="bg-gray-700/50 p-2 rounded-lg text-center animate-fade-in">
                  <img
                    src="/placeholder.svg"
                    alt="Payment QR Placeholder"
                    className="w-24 h-24 mx-auto mb-2 rounded-lg object-contain bg-gray-600 animate-shimmer"
                  />
                  <p className="text-blue-400 font-mono animate-fade-in">Scan to Pay</p>
                  <p className="text-sm text-gray-400 mt-1 animate-fade-in">₹39.99</p>
                  <p className="text-green-400 mt-2 font-mono animate-pop">Your code: <span className="font-bold">{code}</span></p>
                  <p className="text-xs text-gray-400 mt-1 animate-fade-in">Add this code in payment note.</p>
                </div>
              </div>
              <button
                onClick={handlePayment}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-60 animate-pop"
                disabled={loading}
              >
                {loading ? 'Logging...' : 'Pay ₹39.99 Online'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySupport;
