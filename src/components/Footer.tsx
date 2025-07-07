
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-700/50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2025 sachin.code - Built in public</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-400 hover:text-pink-400 transition-colors">
              Terms
            </Link>
            <Link to="/refund-policy" className="text-gray-400 hover:text-pink-400 transition-colors">
              Refund Policy
            </Link>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              Discord
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              Twitch
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
