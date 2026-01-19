import { useUserContext } from "../../context/user/UserContextValue";

const Dashboard = () => {
  const { user } = useUserContext();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome, {user?.name}!</h2>
          <p className="text-gray-600 mb-2">
            Role: <span className="font-semibold text-blue-600">{user?.role}</span>
          </p>
          <p className="text-gray-600">
            Email: <span className="font-semibold">{user?.email}</span>
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-6">
          <p className="text-gray-700">
            ✅ This page is accessible to <strong>users</strong>, <strong>moderators</strong>, and <strong>admins</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
