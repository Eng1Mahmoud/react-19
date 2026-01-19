import { useUserContext } from "../../context/user/UserContextValue";

const Settings = () => {
  const { user } = useUserContext();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Settings</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
          <p className="text-gray-600 mb-2">
            User: <span className="font-semibold">{user?.name}</span>
          </p>
          <p className="text-gray-600 mb-2">
            Role: <span className="font-semibold text-purple-600">{user?.role}</span>
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Email Notifications</span>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Dark Mode</span>
              <input type="checkbox" className="toggle" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Two-Factor Authentication</span>
              <input type="checkbox" className="toggle" />
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-6">
          <p className="text-gray-700">
            ✅ This page is accessible to <strong>moderators</strong> and <strong>admins</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
