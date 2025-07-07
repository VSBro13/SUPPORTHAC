
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { toast } from "@/hooks/use-toast";

const LiveSession = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: '',
    timeSlot: ''
  });

  const payForSession = () => {
    alert("Payment successful! Please fill out the booking form below.");
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Live session booking:', formData);
    toast({
      title: "Session Booked!",
      description: "Your live session has been scheduled. Check your email for details.",
    });
    setFormData({ name: '', email: '', idea: '', timeSlot: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navbar />
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Link 
            to="/" 
            className="inline-block text-pink-400 hover:text-pink-300 mb-6 transition-colors"
          >
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            💬 <span className="text-pink-400">'slice of stream cake'</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 text-center">
            ₹59.99 – Book 20 mins live exposure for your idea.
          </p>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">💬</div>
              <h2 className="text-2xl font-bold text-pink-400 mb-4">Book a Live Session</h2>
              <p className="text-gray-300 mb-2">
                Get 20 minutes of live exposure for your idea with community feedback and insights.
              </p>
              <p className="text-red-400 text-sm">
                ⚠️ This donation is non-refundable
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-blue-400">Pay & Book</h3>
              
              <button
                onClick={payForSession}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
              >
                Pay ₹59.99 & Book Session
              </button>
              
              {showForm && (
                <form onSubmit={handleSubmit} className="space-y-4 border-t border-gray-600 pt-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
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
                      Email
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
                    <label htmlFor="idea" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Idea (200 characters max)
                    </label>
                    <textarea
                      id="idea"
                      name="idea"
                      value={formData.idea}
                      onChange={handleChange}
                      required
                      maxLength={200}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-pink-500/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white resize-none"
                    />
                    <p className="text-sm text-gray-400 mt-1">{formData.idea.length}/200</p>
                  </div>

                  <div>
                    <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-pink-500/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                    >
                      <option value="">Select a time slot</option>
                      <option value="Saturday 10am">Saturday 10am</option>
                      <option value="Saturday 4pm">Saturday 4pm</option>
                      <option value="Sunday 10am">Sunday 10am</option>
                      <option value="Sunday 4pm">Sunday 4pm</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    Book My Session
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
