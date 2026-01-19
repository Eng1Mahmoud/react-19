import { Link, useNavigate } from "react-router";
import { useUserContext } from "../context/user/UserContextValue";

export function Header() {
  const { user, isAuthenticated, logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="w-full px-10 py-5 flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          React 19 App
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-white hover:text-blue-200 transition-colors">
          Home
        </Link>
        <Link to="/products" className="text-white hover:text-blue-200 transition-colors">
          Products
        </Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="text-white hover:text-blue-200 transition-colors">
              Dashboard
            </Link>
            <Link to="/profile" className="text-white hover:text-blue-200 transition-colors">
              Profile
            </Link>
            
            {user?.role === 'admin' && (
              <Link to="/admin" className="text-white hover:text-blue-200 transition-colors">
                Admin Panel
              </Link>
            )}
            
            {(user?.role === 'admin' || user?.role === 'moderator') && (
              <Link to="/settings" className="text-white hover:text-blue-200 transition-colors">
                Settings
              </Link>
            )}
            
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-white/30">
              <span className="text-white text-sm">
                {user?.name} <span className="text-blue-200">({user?.role})</span>
              </span>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition font-semibold"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
