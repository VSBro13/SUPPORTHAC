import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white text-sm sm:text-base animate-fade-in">
      <Navbar />
      <div className="pt-20 pb-8 px-2 sm:px-4 animate-slide-up">
        <div className="max-w-full sm:max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-block text-pink-400 hover:text-pink-300 mb-6 transition-colors animate-pop"
          >
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-pop">
            📜 <span className="text-pink-400">Terms of Service</span>
          </h1>
          
          <div className="space-y-8 text-gray-300 animate-fade-in">
            <div>
              <p><strong>Effective Date:</strong> July 5, 2025</p>
              <p><strong>Last Updated:</strong> July 5, 2025</p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>This website ("Smart Donation Page") is operated by Sachin ("Creator", "we", "us", or "our") to accept voluntary contributions, enable limited 'slice of stream cake', and share information about a student-led public project. By using this site or making a contribution, you agree to these Terms of Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Contribution Policy</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>All payments made through this page are considered donations intended to support the ongoing student-led project.</li>
                <li>Contributions under "☕ Coffee" and "Support with Second Cup" are non-refundable under all circumstances, including accidental or duplicate payments. These are symbolic gestures of encouragement, not purchases or subscriptions.</li>
                <li>The ₹69.99 contribution includes 💬 'slice of stream cake' — a 15-minute live stream feature, where your idea gets shared or discussed on a live session to provide exposure, feedback, or community insight. Participants will also be provided with a video recording of their session.</li>
                <li>
                  The ₹99.99 contribution includes 🍔 'THE BIG BITE' — a full-month pass: you get a 15-minute feature in Week 1, plus 5-minute check-ins in Weeks 2–4 to update yourwith Second Cup. You’ll also receive a clean recording of your first appearance and have a chance to earn from stream donations.
                </li>
                <li>By donating, you acknowledge that the purpose is to support open creation and experimentation — not to receive goods, services, or guaranteed outcomes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. No Guarantee of Results</h2>
              <p>This is an experimental, community-driven project. Contributions are not investments or purchases. While we aim to offer meaningful interactions, we do not guarantee mentorship outcomes, advice accuracy, or any deliverable.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Community Access</h2>
              <p>Joining the Discord or other linked communities is free. However, all users must abide by community guidelines. Toxic or abusive behavior may result in removal without notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Form Usage</h2>
              <p>Any messages sent via the contact form or email must be respectful and constructive. Spam, abuse, or harassment will result in blocking and/or reporting.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
              <p>All original content, designs, and visuals on this page belong to Sachin unless stated otherwise. You may reference or remix with proper credit if the source is public/open-source.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Modifications to Terms</h2>
              <p>We may update these terms at any time without prior notice. Continued use of the site after changes means you accept the updated terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimer</h2>
              <p>This is not a commercial product or company. It is a personal initiative. Use this platform at your own discretion and responsibility.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact</h2>
              <p>If you have questions about these terms, reach out via the contact form or email provided on the page.</p>
            </section>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default Terms;
