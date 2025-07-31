import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { toast } from "@/hooks/use-toast";

const SESSION_AMOUNT = 99.99;

const generateCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();

const TheBigBite = () => {
  const [showBookingLink, setShowBookingLink] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    if (!code) return;
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        toast({
          title: "Copy failed",
          description: "Couldn't copy to clipboard. Please try again.",
          variant: "destructive",
        });
      });
  }, [code]);

  // Auto-generate code on component mount
  useEffect(() => {
    setCode(generateCode());
  }, []);

  // Warn before page reload
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (showBookingLink) {
        e.preventDefault();
        e.returnValue = "Are you sure you want to leave? Your booking code will be lost.";
        return e.returnValue;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [showBookingLink]);

  const payForSession = async () => {
    const alertMessage = `Payment successful! Please click the booking link below to schedule your session.
    
IMPORTANT: 
- Please DON'T reload this page or you'll lose your booking code
- Keep this code for reference: ${code}
- Click the booking link that will appear below`;

    alert(alertMessage);
    setLoading(true);
    try {
      // Send code to backend API for logging (and Google Sheets)
      await fetch('/api/log-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'the-big-bite', code }),
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to process your booking. Please try again.",
        variant: "destructive",
      });
    }
    setLoading(false);
    setShowBookingLink(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white text-sm sm:text-base flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 py-4 overflow-auto pt-16">
        <div className="w-full max-w-5xl animate-slide-up">
          <div className="md:flex md:gap-8 md:items-start">
            {/* Left column: all except QR, button, code */}
            <div className="flex-1 md:pr-4">
              {/* Home Button and Warning Banner side by side - matching LiveSession.tsx */}
              <div className="flex flex-col sm:flex-row gap-2 mb-2">
                <Link 
                  to="/" 
                  className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center gap-1 w-fit"
                  aria-label="Back to Home"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Home</span>
                </Link>
                
                <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-2 animate-fade-in flex-1">
                  <p className="text-yellow-400 font-semibold text-xs text-center">
                    ⚠️ Live sessions may be refundable under certain circumstances. <br /> Don't reload this page after payment.
                  </p>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center animate-pop">
                🍔 <span className="text-pink-400">'THE BIG BITE'</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-300 mb-6 text-center animate-fade-in">
                ₹{SESSION_AMOUNT} – Your full moment on the plate
              </p>
              
              <div className="text-center mb-4">
                <div className="text-4xl md:text-6xl mb-2 animate-pop">🎥</div>
                <h2 className="text-lg md:text-2xl font-bold text-pink-400 mb-2 animate-fade-in">
                  Go live, Go bold, Get followed up
                </h2>
                
                <div className="bg-gray-800/50 p-4 rounded-lg mb-4 text-left animate-fade-in">
                  <h3 className="font-bold text-blue-400 mb-2">✅ What's included:</h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li>• 15-minute slot on Twitch livestream</li>
                    <li className="pl-4">— Pitch or showcase your idea/project/process LIVE.</li>
                    <li>• Follow-up 5-minute check-in the next week</li>
                    <li className="pl-4">— Continue where you left off, share updates, or close the loop.</li>
                    <li>• Clean video recording of your segment</li>
                    <li className="pl-4">— Yours to share, archive, or clip for socials.</li>
                    <li>• Chance to earn from live donations</li>
                    <li className="pl-4">— If your story hits and inspires, you get a share of the live stream support.</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right column: QR, button, code */}
            <div className="flex-1 md:pl-4 space-y-4 md:space-y-8 flex flex-col items-center">
              <h3 className="text-base md:text-xl font-semibold text-blue-400 animate-pop">Pay & Book</h3>
              
              <div className="w-full max-w-xs md:max-w-sm">
                <h4 className="text-sm md:text-lg font-semibold text-pink-400 mb-1 animate-pop">UPI Payment</h4>
                
                <div className="bg-gray-700/50 p-2 md:p-6 text-center animate-fade-in">
                  <img
                    src="/99.jpg"
                    alt="Payment QR Code"
                    width={192}
                    height={192}
                    className="w-28 h-28 md:w-48 md:h-48 mx-auto mb-2 rounded-lg object-contain bg-gray-600 animate-shimmer"
                    loading="lazy"
                  />
                  
                  <p className="text-pink-400 font-mono animate-fade-in">Scan to Pay</p>
                  <p className="text-sm md:text-xl text-gray-400 mt-1 animate-fade-in">₹{SESSION_AMOUNT}</p>
                  
                  <div 
                    className="mt-4 p-3 bg-gray-800/50 rounded-lg cursor-pointer active:bg-gray-700 transition"
                    onClick={copyToClipboard}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && copyToClipboard()}
                  >
                    <p className="text-green-400 font-mono text-center">
                      <span className="text-gray-400">Code: </span>
                      <span className="font-bold">{code}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1 text-center">
                      {copied ? '✅ Copied!' : 'Tap to copy'}
                    </p>
                  </div>
                  
                  <p className="text-xs md:text-base text-gray-400 mt-1 animate-fade-in">
                    Add this code in payment note.
                  </p>
                </div>
              </div>
              
              <button
                onClick={payForSession}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 md:py-4 rounded-lg text-base md:text-xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 disabled:opacity-60 animate-pop"
                disabled={loading || !code}
                aria-busy={loading}
              >
                {loading ? 'Processing...' : `Paid `}
              </button>
              
              {showBookingLink && (
                <div className="w-full max-w-xs md:max-w-sm text-center animate-fade-in space-y-2">
                  <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-2 mb-2">
                    <p className="text-red-300 font-semibold text-xs">
                      ⚠️ Don't reload this page - Keep this tab open until booking is complete
                    </p>
                  </div>
                  
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScYctvPT_QATPdO4trwLqnRhtQvln8H9SRm5Cf5VeRj0THiwg/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 animate-pop"
                  >
                    Book Your Session Now
                  </a>
                  
                  <div className="bg-gray-800/50 p-2 rounded-lg">
                    <p className="text-xs text-gray-300">
                      Your booking code: <span className="font-mono text-green-400 font-bold">{code}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Save this code for reference. You'll need it if you contact support.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default TheBigBite;