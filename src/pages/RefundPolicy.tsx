import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white text-sm sm:text-base">
      <Navbar />
      <div className="pt-20 pb-8 px-2 sm:px-4">
        <div className="max-w-full sm:max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-block text-pink-400 hover:text-pink-300 mb-6 transition-colors"
          >
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            💰 <span className="text-pink-400">Refund Policy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Clear guidelines on our donation and refund policies
          </p>
          
          <div className="space-y-8 text-gray-300">
            <div>
              <p><strong>Effective Date:</strong> August 5, 2025</p>
              <p><strong>Last Updated:</strong> August 5, 2025</p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">📋 Refund Policy</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-pink-400 mb-3">1. No Refund Policy</h3>
                <p className="mb-4">All contributions made through this website are considered donations and are non-refundable under all circumstances.</p>
                <p className="mb-2">This includes but is not limited to:</p>
                <ul className="space-y-1 list-disc list-inside ml-4">
                  <li>☕ Coffee donations (₹19.99)</li>
                  <li>🚀 Support the Journey donations (₹39.99)</li>
                  <li>💬 'slice of stream cake' sessions (₹69.99)</li>
                  <li>Accidental or duplicate payments</li>
                  <li>Change of mind after payment</li>
                  <li>Technical issues during payment</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-pink-400 mb-3">2. Nature of Contributions</h3>
                <p className="mb-2">By making a contribution, you acknowledge that:</p>
                <ul className="space-y-1 list-disc list-inside ml-4">
                  <li>This is a voluntary donation to support a student-led project</li>
                  <li>You are not purchasing a product or service</li>
                  <li>No guaranteed outcomes or deliverables are promised</li>
                  <li>The contribution is made with full understanding of this policy</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-pink-400 mb-3">3. Live Session Policy</h3>
                <p className="mb-2">For ₹69.99 Live Session contributions:</p>
                <ul className="space-y-1 list-disc list-inside ml-4">
                  <li>Sessions may be rescheduled based on availability</li>
                  <li>We reserve the right to decline inappropriate submissions</li>
                  <li>Limited refunds may be considered for technical issues or cancellations</li>
                  <li>Sessions are conducted on a best-effort basis</li>
                  <li>Only 4 participants are allowed per session</li>
                  <li>Refund requests must be made within 24 hours of booking</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-pink-400 mb-3">4. Technical Issues</h3>
                <p className="mb-2">In case of technical issues during payment:</p>
                <ul className="space-y-1 list-disc list-inside ml-4">
                  <li>Contact us immediately through the provided contact form</li>
                  <li>We will investigate and provide appropriate assistance</li>
                  <li>Resolution will be at our discretion based on circumstances</li>
                  <li>No automatic refunds will be processed</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-pink-400 mb-3">5. Contact for Issues</h3>
                <p className="mb-2">If you experience any issues or have concerns:</p>
                <ul className="space-y-1 list-disc list-inside ml-4">
                  <li>Use the contact form on our main website</li>
                  <li>Provide clear details about your concern</li>
                  <li>Include payment reference if applicable</li>
                  <li>We will respond within 48–72 hours</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-pink-400 mb-3">6. Important Notice</h3>
                <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4">
                  <p className="text-red-400 font-semibold">
                    ⚠️ Please read this policy carefully before making any contribution. By proceeding with payment, you agree to this no-refund policy.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">
                This policy is part of our Terms of Service and may be updated without prior notice. Continued use of the site constitutes acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default RefundPolicy;
