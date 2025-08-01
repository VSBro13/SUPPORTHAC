import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, Copy, ArrowLeft, AlertTriangle } from "lucide-react";

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
    setLoading(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Send code to backend API for logging
      await fetch('/api/log-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'the-big-bite', code }),
      });

      toast({
        title: "Payment successful!",
        description: "Please click the booking link below to schedule your session.",
        variant: "default",
      });

      setShowBookingLink(true);
    } catch (err) {
      toast({
        title: "Payment failed",
        description: "Couldn't process your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 pt-20">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column: Content */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 w-fit"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
                
                <div className="flex-1 flex items-center bg-yellow-900/30 border border-yellow-500/50 rounded-lg px-4 py-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <p className="text-yellow-300 text-sm">
                    Live sessions may be refundable under certain circumstances. Don't reload this page after payment.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                  <span className="text-white">🍔</span> THE BIG BITE
                </h1>
                
                <p className="text-xl text-gray-300">
                  <span className="font-semibold text-pink-400">₹{SESSION_AMOUNT} Monthly Pass</span> includes:
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">15-minute feature slot</h3>
                      <p className="text-gray-400 text-sm">Pitch or showcase your idea/project/process LIVE on our Twitch stream</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Weekly check-ins</h3>
                      <p className="text-gray-400 text-sm">5-minute updates in Weeks 2-4 to continue your story</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Video recording</h3>
                      <p className="text-gray-400 text-sm">Clean recording of your segment to share or archive</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Donation share</h3>
                      <p className="text-gray-400 text-sm">Earn a portion of any donations received during your segment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column: Payment */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-6">
                <h2 className="text-xl font-semibold text-center text-blue-400">
                  Complete Your Booking
                </h2>
                
                <div className="space-y-4">
                  <div className="flex flex-col items-center">
                    <img
                      src="/99.jpg"
                      alt="UPI Payment QR Code"
                      className="w-48 h-48 rounded-lg border-2 border-gray-700 object-cover"
                      loading="lazy"
                    />
                    <p className="mt-2 text-gray-300">Scan QR code to pay ₹{SESSION_AMOUNT}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div 
                      className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 cursor-pointer transition-colors hover:bg-gray-800/70 active:bg-gray-800"
                      onClick={copyToClipboard}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && copyToClipboard()}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-400">Booking Reference</p>
                          <p className="font-mono text-lg font-bold text-green-400">{code}</p>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          {copied ? (
                            <>
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-green-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-400">Copy</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      Please include this code in your payment note
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={payForSession}
                  disabled={loading || !code}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    loading 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-pink-600 hover:bg-pink-700 hover:shadow-lg hover:shadow-pink-500/20'
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "I've Made the Payment"
                  )}
                </button>
              </div>
              
              {showBookingLink && (
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 space-y-4 animate-fade-in">
                  <div className="flex items-start gap-3 bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-red-300 text-sm">
                      Important: Don't reload this page. Keep this tab open until booking is complete.
                    </p>
                  </div>
                  
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScYctvPT_QATPdO4trwLqnRhtQvln8H9SRm5Cf5VeRj0THiwg/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    Book Your Session Now
                  </a>
                  
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <p className="text-sm text-gray-300">
                      Your booking reference: <span className="font-mono font-bold text-green-400">{code}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
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