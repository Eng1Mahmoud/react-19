import { useNavigate } from "react-router";
import { useUserContext } from "../../context/user/UserContextValue";

const Unauthorized = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useUserContext();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-4">
            You don't have permission to access this page.
          </p>
          
          {isAuthenticated && user && (
            <div className="bg-gray-50 rounded p-4 mb-6">
              <p className="text-sm text-gray-600">
                Current Role: <span className="font-semibold text-gray-800">{user.role}</span>
              </p>
              <p className="text-sm text-gray-600">
                User: <span className="font-semibold text-gray-800">{user.name}</span>
              </p>
            </div>
          )}

          <div className="space-y-2">
            <button
              onClick={() => navigate(-1)}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
