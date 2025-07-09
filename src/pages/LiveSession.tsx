import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { toast } from "@/hooks/use-toast";
import BackToTop from "@/components/BackToTop";

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

const SESSION_AMOUNT = 69.99;

const LiveSession = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    idea: '',
    session: ''
  });
  const [code, setCode] = useState(generateCode());
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const payForSession = async () => {
    alert(`Payment successful! Please fill out the booking form below.\n\nPlease put the generated code in the field 'add note' while paying.\nYour code: ${code}`);
    setLoading(true);
    try {
      // Send code to backend API for logging (and Google Sheets)
      await fetch('/api/log-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'live', code }),
      });
    } catch (err) {
      alert('Failed to log your code. Please try again later.');
    }
    setLoading(false);
    setCode(generateCode());
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      // Send form data to backend for logging and Google Sheets
      await fetch('/api/log-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, code }),
      });
      toast({
        title: "Session Booked!",
        description: "Your live session has been scheduled. Check your email for details.",
      });
      setFormData({ name: '', email: '', mobile: '', idea: '', session: '' });
      setShowForm(false);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to book session. Please try again later.",
      });
    }
    setFormLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="h-screen min-h-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white text-sm sm:text-base flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4">
        <div className="w-full max-w-5xl animate-slide-up">
          <div className="md:flex md:gap-8 md:items-start">
            {/* Left column: all except QR, button, code, and form */}
            <div className="flex-1 md:pr-4">
              <Link 
                to="/" 
                className="inline-block text-pink-400 hover:text-pink-300 mb-2 transition-colors animate-pop"
              >
                ← Back to Home
              </Link>
              {/* Warning Banner */}
              <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-2 mb-2 animate-fade-in">
                <p className="text-yellow-400 font-semibold text-xs text-center">
                  ⚠️ Live sessions may be refundable under certain circumstances.
                </p>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center animate-pop">
                💬 <span className="text-pink-400">'slice of stream cake'</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mb-6 text-center animate-fade-in">
                ₹{SESSION_AMOUNT} – Book 20 mins live exposure for your idea. <br /> After payment, fill the form below.
              </p>
              <div className="text-center mb-4">
                <div className="text-4xl md:text-6xl mb-2 animate-pop">💬</div>
                <h2 className="text-lg md:text-2xl font-bold text-pink-400 mb-2 animate-fade-in">Book a Live Session</h2>
                <p className="text-gray-300 mb-1 animate-fade-in">
                  Get 20 minutes of live exposure for your idea.
                </p>
              </div>
            </div>
            {/* Right column: QR, button, code, and form */}
            <div className="flex-1 md:pl-4 space-y-4 md:space-y-8 flex flex-col items-center">
              <h3 className="text-base md:text-xl font-semibold text-blue-400 animate-pop">Pay & Book</h3>
              <div className="w-full max-w-xs md:max-w-sm">
                <h4 className="text-sm md:text-lg font-semibold text-pink-400 mb-1 animate-pop">UPI Payment</h4>
                <div className="bg-gray-700/50 p-2 md:p-6 rounded-lg text-center animate-fade-in">
                  <img
                    src="/placeholder.svg"
                    alt="Payment QR Placeholder"
                    className="w-28 h-28 md:w-48 md:h-48 mx-auto mb-2 rounded-lg object-contain bg-gray-600 animate-shimmer"
                  />
                  <p className="text-pink-400 font-mono animate-fade-in">Scan to Pay</p>
                  <p className="text-sm md:text-xl text-gray-400 mt-1 animate-fade-in">₹{SESSION_AMOUNT}</p>
                  <p className="text-green-400 mt-2 font-mono animate-pop">Your code: <span className="font-bold">{code}</span></p>
                  <p className="text-xs md:text-base text-gray-400 mt-1 animate-fade-in">Add this code in payment note.</p>
                </div>
              </div>
              <button
                onClick={payForSession}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 md:py-4 rounded-lg text-base md:text-xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 disabled:opacity-60 animate-pop"
                disabled={loading}
              >
                {loading ? 'Logging...' : `Payed ₹${SESSION_AMOUNT} & Book Session`}
              </button>
              {showForm && (
                <form onSubmit={handleSubmit} className="space-y-2 border-t border-gray-600 pt-3 animate-fade-in max-h-64 overflow-y-auto w-full max-w-xs md:max-w-sm">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-2 bg-gray-700/50 border border-pink-500/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-xs"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-2 bg-gray-700/50 border border-pink-500/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-xs"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-xs font-medium text-gray-300 mb-1">
                      Mobile Number (+91) *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full px-2 py-2 bg-gray-700/50 border border-pink-500/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-xs"
                    />
                  </div>
                  <div>
                    <label htmlFor="idea" className="block text-xs font-medium text-gray-300 mb-1">
                      Your Idea (max 300 chars) *
                    </label>
                    <textarea
                      id="idea"
                      name="idea"
                      value={formData.idea}
                      onChange={handleChange}
                      required
                      maxLength={300}
                      rows={2}
                      className="w-full px-2 py-2 bg-gray-700/50 border border-pink-500/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-xs resize-none"
                      placeholder="Describe your idea..."
                    />
                    <p className="text-xs text-gray-400 mt-1">{formData.idea.length}/300</p>
                  </div>
                  <div>
                    <label htmlFor="session" className="block text-xs font-medium text-gray-300 mb-1">
                      Preferred Session *
                    </label>
                    <select
                      id="session"
                      name="session"
                      value={formData.session}
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-2 bg-gray-700/50 border border-pink-500/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-xs"
                    >
                      <option value="">Select a session</option>
                      <option value="1st Wednesday">1st Wednesday</option>
                      <option value="2nd Wednesday">2nd Wednesday</option>
                      <option value="3rd Wednesday">3rd Wednesday</option>
                      <option value="4th Wednesday">4th Wednesday</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-60 animate-pop text-xs"
                    disabled={formLoading}
                  >
                    {formLoading ? 'Booking...' : 'Book Session'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSession;
