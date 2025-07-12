import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

const generateCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();

const COFFEE_AMOUNT = 19.99;

const CoffeeSupport = () => {
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);

  // Auto-generate code on component mount
  useEffect(() => {
    setCode(generateCode());
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">
        <div className="w-full max-w-5xl animate-slide-up">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column: content */}
            <div className="flex-1">
              <Link 
                to="/" 
                className="inline-flex items-center text-pink-400 hover:text-pink-300 mb-4 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Home
              </Link>
              
              {/* Warning Banner */}
              <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-3 mb-6 text-center">
                <p className="text-red-300 font-medium text-sm">
                  ⚠️ Coffee contributions are non-refundable
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                ☕ <span className="text-pink-400">Support with Coffee</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center">
                ₹{COFFEE_AMOUNT} – A small cheer to keep going
              </p>

              <div className="text-center mb-6">
                <div className="text-5xl md:text-6xl mb-4">☕</div>
                <h2 className="text-xl md:text-2xl font-bold text-pink-400 mb-3">Buy Me a Coffee</h2>
                <p className="text-gray-300 mb-2">
                  A small contribution to fuel the journey
                </p>
              </div>
            </div>

            {/* Right column: payment section */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full max-w-xs">
                <h3 className="text-lg font-semibold text-blue-400 mb-3 text-center">UPI Payment</h3>
                <div className="bg-gray-700/50 p-4 ">
                  <img
                    src="/19.jpg"
                    alt="Payment QR Code"
                    className="w-32 h-32 mx-auto mb-4 rounded-lg object-contain bg-gray-600"
                  />
                  <p className="text-pink-400 font-mono text-sm text-center">Scan to Pay</p>
                  <p className="text-xl text-gray-300 mt-2 text-center">₹{COFFEE_AMOUNT}</p>
                  
                  {/* Clickable code section */}
                  <div 
                    className="mt-4 p-3 bg-gray-800/50 rounded-lg cursor-pointer active:bg-gray-700 transition"
                    onClick={copyToClipboard}
                  >
                    <p className="text-green-400 font-mono text-center">
                      <span className="text-gray-400">Code: </span>
                      <span className="font-bold">{code}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1 text-center">
                      {copied ? '✅ Copied!' : 'Tap to copy'}
                    </p>
                  </div>
                  
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Add this code in payment note for reference
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default CoffeeSupport;