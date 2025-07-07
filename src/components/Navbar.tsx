
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
            sachin.code
          </Link>
          <div className="flex space-x-6">
            <Link 
              to="/terms" 
              className="text-gray-300 hover:text-pink-400 transition-colors"
            >
              Terms
            </Link>
            <Link 
              to="/refund-policy" 
              className="text-gray-300 hover:text-pink-400 transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
