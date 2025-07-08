import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

const CoffeeSupport = () => {
  const [code, setCode] = useState(generateCode());
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    alert(`Thank you for your coffee support! ☕\n\nPlease put the generated code in the field 'add note' while paying.\nYour code: ${code}`);
    setLoading(true);
    try {
      // Send code to backend API for logging (and Google Sheets)
      await fetch('/api/log-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'coffee', code }),
      });
    } catch (err) {
      alert('Failed to log your code. Please try again later.');
    }
    setLoading(false);
    setCode(generateCode());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white text-sm sm:text-base">
      <Navbar />
      <div className="pt-20 pb-8 px-2 sm:px-4">
        <div className="max-w-full sm:max-w-2xl mx-auto">
          <Link 
            to="/" 
            className="inline-block text-pink-400 hover:text-pink-300 mb-4 sm:mb-6 transition-colors"
          >
            ← Back to Home
          </Link>
          
          {/* Warning Banner */}
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 mb-4 sm:mb-6">
            <p className="text-red-400 font-semibold text-xs sm:text-sm text-center">
              ⚠️ Coffee contributions are non-refundable. Please read our refund policy before contributing.
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center">
            ☕ <span className="text-pink-400">Support with Coffee</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 text-center">
            ₹19.99 – A small cheer to keep going.
          </p>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">☕</div>
              <h2 className="text-xl sm:text-2xl font-bold text-pink-400 mb-3 sm:mb-4">Buy Me a Coffee</h2>
              <p className="text-gray-300 mb-2">
                A small contribution to fuel the journey and keep the creativity flowing.
              </p>
              <p className="text-red-400 text-xs sm:text-sm">
                ⚠️ This contribution is non-refundable
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-3 sm:mb-4">UPI Payment</h3>
                <div className="bg-gray-700/50 p-4 sm:p-6 rounded-lg text-center">
                  {/*
                  <div className="w-28 h-28 bg-gray-600 rounded-lg mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                    <span className="text-gray-400">QR Code</span>
                  </div>
                  */}
                  <img
                    src="/placeholder.svg"
                    alt="Payment QR Placeholder"
                    className="w-28 h-28 mx-auto mb-3 sm:mb-4 rounded-lg object-contain bg-gray-600"
                  />
                  <p className="text-pink-400 font-mono">Scan to Pay</p>
                  <p className="text-sm text-gray-400 mt-2">₹19.99</p>
                  <p className="text-green-400 mt-3 sm:mt-4 font-mono">Your code: <span className="font-bold">{code}</span></p>
                  <p className="text-xs text-gray-400 mt-1">Please put the generated code in the field 'add note' while paying.</p>
                </div>
              </div>
              
              <button
                onClick={handlePayment}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 sm:py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Logging...' : 'Pay ₹19.99 Online'}
              </button>
            </div>
          </div>
          
          <BackToTop />
        </div>
      </div>
    </div>
  );
};

export default CoffeeSupport;
