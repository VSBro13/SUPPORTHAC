import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, Copy, ArrowLeft, AlertTriangle } from "lucide-react";

const PUDDING_AMOUNT = 79.99;

const generateCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();

const Pudding = () => {
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCode(generateCode());
  }, []);

  const copyToClipboard = () => {
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-900 to-purple-900 text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 pt-20">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column: Content */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/support" 
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 w-fit"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Support Options
                </Link>
                
                <div className="flex-1 flex items-center bg-purple-900/30 border border-double border-purple-500/50 rounded-lg px-4 py-2">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" />
                  <p className="text-red-300 text-sm">
                    Pudding contributions are non-refundable
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-3">
                  <span className="text-8xl">🍮</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-400">
                    SUPPORT WITH PUDDING
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300">
                  <span className="font-semibold text-purple-400">₹{PUDDING_AMOUNT}</span> – A delightful reward for progress
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-double border-purple-500 rounded-xl p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Fuel with Pudding</h3>
                      <p className="text-gray-400 text-sm">Your contribution helps sustain this student-led project</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Symbolic gesture</h3>
                      <p className="text-gray-400 text-sm">This is a voluntary donation, not a purchase</p>
                    </div>
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">
                    Choose different support levels:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-3">
                    <Link to="/coffee">
                      <button className="min-w-[100px] flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-200">
                        <span>☕</span>
                        <span>Coffee</span>
                      </button>
                    </Link>

                    <Link to="/cookie">
                      <button className="min-w-[100px] flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-200">
                        <span>🍪</span>
                        <span>Cookie</span>
                      </button>
                    </Link>

                    <Link to="/journey">
                      <button className="min-w-[100px] flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-200">
                        <span>🍜</span>
                        <span>Second Cup</span>
                      </button>
                    </Link>

                    <Link to="/extra-fuel">
                      <button className="min-w-[100px] flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-200">
                        <span>🥤</span>
                        <span>Extra Fuel</span>
                      </button>
                    </Link>

                    <Link to="/nitrous">
                      <button className="min-w-[100px] flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-lg transition-colors duration-200">
                        <span>💧</span>
                        <span>Nitrous</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column: Payment */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-double border-purple-500 rounded-xl p-6 space-y-6">
                <h2 className="text-xl font-semibold text-center text-blue-400">
                  Make Your Contribution
                </h2>
                
                <div className="space-y-4">
                  <div className="flex flex-col items-center">
                    <img
                      src="/19.jpg"
                      alt="UPI Payment QR Code"
                      className="w-48 h-48 rounded-lg border-2 border-gray-700 object-cover"
                      loading="lazy"
                    />
                    <p className="mt-2 text-gray-300">Scan QR code to pay ₹{PUDDING_AMOUNT}</p>
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
                          <p className="text-xs text-gray-400">Reference Code</p>
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
                      Include this code in your payment note
                    </p>
                  </div>
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

export default Pudding;