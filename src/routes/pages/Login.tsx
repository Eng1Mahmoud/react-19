import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../../context/user/UserContextValue";
import { UserRole } from "../../types/context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("user");
  const { login, isAuthenticated } = useUserContext();
  const navigate = useNavigate();

  // Redirect when already authenticated or after login
  useEffect(() => {
    if (isAuthenticated) {
    
        navigate(-1);
     
    }
  }, [isAuthenticated]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (email && password) {
      // Mock login - in real app, validate credentials
      // useEffect above will handle navigation after state updates
      login(email, password, selectedRole);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="user@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Login as (Demo)
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as UserRole)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="guest">Guest</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600 font-semibold mb-2">Demo Instructions:</p>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Enter any email and password</li>
            <li>• Select a role to test different access levels</li>
            <li>• <strong>Admin:</strong> Full access to all routes</li>
            <li>• <strong>Moderator:</strong> Access to dashboard & settings</li>
            <li>• <strong>User:</strong> Access to profile & dashboard</li>
            <li>• <strong>Guest:</strong> Limited access</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
