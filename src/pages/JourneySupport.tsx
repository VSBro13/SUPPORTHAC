import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import BackToTop from "@/components/BackToTop";

const generateCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();

const JOURNEY_AMOUNT = 39.99;

const JourneySupport = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white text-sm sm:text-base flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6">
        <div className="w-full max-w-5xl animate-slide-up">
          <div className="md:flex md:gap-8 md:items-start">
            {/* Left column: content */}
            <div className="flex-1 md:pr-4">
              <Link 
                to="/" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4 transition-colors animate-pop"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Home
              </Link>
              
              {/* Warning Banner */}
              <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-3 mb-4 animate-fade-in">
                <p className="text-red-400 font-semibold text-sm text-center">
                  ⚠️ Journey support contributions are non-refundable.
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center animate-pop">
                🚀 <span className="text-blue-400">Support the Journey</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-300 mb-8 text-center animate-fade-in">
                ₹{JOURNEY_AMOUNT} – Fuel open creation.
              </p>

              <div className="text-center mb-6">
                <div className="text-5xl md:text-6xl mb-4 animate-pop">🚀</div>
                <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-3 animate-fade-in">Fuel the Mission</h2>
                <p className="text-gray-300 mb-2 animate-fade-in">
                  Support the open creation movement.
                </p>
                <p className="text-red-400 text-sm animate-fade-in">
                  ⚠️ Non-refundable contribution
                </p>
              </div>
            </div>

            {/* Right column: payment section */}
            <div className="flex-1 md:pl-4 space-y-6 md:space-y-8 flex flex-col items-center">
              <div className="w-full max-w-xs md:max-w-sm">
                <h3 className="text-lg md:text-xl font-semibold text-blue-400 mb-3 animate-pop">UPI Payment</h3>
                <div className="bg-gray-700/50 p-4 md:p-6 rounded-lg text-center animate-fade-in">
                  <img
                    src="/placeholder.svg"
                    alt="Payment QR Code"
                    className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-lg object-contain bg-gray-600 animate-shimmer"
                  />
                  <p className="text-blue-400 font-mono text-sm md:text-base animate-fade-in">Scan to Pay</p>
                  <p className="text-lg md:text-xl text-gray-300 mt-2 animate-fade-in">₹{JOURNEY_AMOUNT}</p>
                  
                  <div 
                    className="mt-4 p-2 bg-gray-800/50 rounded-lg cursor-pointer group"
                    onClick={copyToClipboard}
                  >
                    <p className="text-green-400 font-mono text-sm md:text-base animate-pop">
                      Your code: <span className="font-bold">{code}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1 group-hover:text-blue-300 transition">
                      {copied ? 'Copied!' : 'Click to copy'}
                    </p>
                  </div>
                  
                  <p className="text-xs md:text-sm text-gray-400 mt-3 animate-fade-in">
                    Add this code in payment note for reference.
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

export default JourneySupport;