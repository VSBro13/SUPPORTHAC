import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="text-center max-w-md p-8 bg-gray-800/50 border border-gray-700 rounded-xl">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-12 h-12 text-red-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">Page not found</p>
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;