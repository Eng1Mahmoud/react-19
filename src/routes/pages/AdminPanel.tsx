import { useUserContext } from "../../context/user/UserContextValue";

const AdminPanel = () => {
  const { user } = useUserContext();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Admin Panel</h1>
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <p className="text-red-800 font-semibold">
            ⚠️ Admin Only Area
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome, Admin {user?.name}!</h2>
          <p className="text-gray-600 mb-4">
            You have full access to all system features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">User Management</h3>
            <p className="text-gray-600">Manage all users in the system</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">System Settings</h3>
            <p className="text-gray-600">Configure system-wide settings</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Analytics</h3>
            <p className="text-gray-600">View system analytics and reports</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Logs</h3>
            <p className="text-gray-600">Access system logs and audit trails</p>
          </div>
        </div>

        <div className="mt-6 bg-green-50 rounded-lg p-6">
          <p className="text-gray-700">
            ✅ This page is <strong>only accessible to admins</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
