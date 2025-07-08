import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { toast } from "@/hooks/use-toast";
import BackToTop from "@/components/BackToTop";

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white text-sm sm:text-base">
      <Navbar />
      <div className="pt-20 pb-8 px-2 sm:px-4">
        <div className="max-w-full sm:max-w-2xl mx-auto">
          <Link 
            to="/" 
            className="inline-block text-pink-400 hover:text-pink-300 mb-6 transition-colors"
          >
            ← Back to Home
          </Link>
          
          {/* Warning Banner */}
          <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4 mb-6">
            <p className="text-yellow-400 font-semibold text-sm text-center">
              ⚠️ Live sessions may be refundable under certain circumstances. Please read our refund policy.
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            💬 <span className="text-pink-400">'slice of stream cake'</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 text-center">
            ₹69.99 – Book 20 mins live exposure for your idea.
          </p>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">💬</div>
              <h2 className="text-2xl font-bold text-pink-400 mb-4">Book a Live Session</h2>
              <p className="text-gray-300 mb-2">
                Get 20 minutes of live exposure for your idea with community feedback and insights.
                Fill the form after payment to book your session.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-blue-400">Pay & Book</h3>
              
              <div>
                <h4 className="text-base font-semibold text-pink-400 mb-2">UPI Payment</h4>
                <div className="bg-gray-700/50 p-6 rounded-lg text-center">
                  {/*
                  <div className="w-32 h-32 bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-400">QR Code</span>
                  </div>
                  */}
                  <img
                    src="/placeholder.svg"
                    alt="Payment QR Placeholder"
                    className="w-32 h-32 mx-auto mb-4 rounded-lg object-contain bg-gray-600"
                  />
                  <p className="text-pink-400 font-mono">Scan to Pay</p>
                  <p className="text-sm text-gray-400 mt-2">₹69.99</p>
                  <p className="text-green-400 mt-4 font-mono">Your code: <span className="font-bold">{code}</span></p>
                  <p className="text-xs text-gray-400 mt-1">Please put the generated code in the field 'add note' while paying.</p>
                </div>
              </div>
              
              <button
                onClick={payForSession}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Logging...' : 'Pay ₹69.99 & Book Session'}
              </button>
              
              {showForm && (
                  <form onSubmit={handleSubmit} className="space-y-4 border-t border-gray-600 pt-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-pink-500/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-pink-500/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-2">
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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-pink-500/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="idea" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Idea (300 characters max) *
                      </label>
                      <textarea
                        id="idea"
                        name="idea"
                        value={formData.idea}
                        onChange={handleChange}
                        required
                        maxLength={300}
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-pink-500/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white resize-none"
                        placeholder="Describe your idea, project, or what you'd like to discuss..."
                      />
                      <p className="text-sm text-gray-400 mt-1">{formData.idea.length}/300</p>
                    </div>
                    <div>
                      <label htmlFor="session" className="block text-sm font-medium text-gray-300 mb-2">
                        Preferred Session (Wednesdays of the month) *
                      </label>
                      <select
                        id="session"
                        name="session"
                        value={formData.session}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-pink-500/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
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
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-60"
                      disabled={formLoading}
                    >
                      {formLoading ? 'Booking...' : 'Book Session'}
                    </button>
                  </form>
                )}
            </div>
          </div>
          <BackToTop />
        </div>
      </div>
    </div>
  );
};

export default LiveSession;
