
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold text-pink-400 hover:text-pink-300 transition-colors"
          >
            sachin R428
          </Link>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <a 
                href="https://discord.gg/your-discord" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
              >
                Discord
              </a>
              <a 
                href="https://twitch.tv/your-twitch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-500 transition-colors text-sm"
              >
                Twitch
              </a>
              <a 
                href="https://instagram.com/your-instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
            <div className="border-l border-gray-600 pl-6 flex space-x-4">
              <Link 
                to="/terms" 
                className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
              >
                Terms
              </Link>
              <Link 
                to="/refund-policy" 
                className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
