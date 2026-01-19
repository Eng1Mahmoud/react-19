import { Link } from "react-router";
import { useUserContext } from "../../context/user/UserContextValue";

const Home = () => {
  const { isAuthenticated, user } = useUserContext();

  const features = [
    {
      title: "useFormStatus & useActionState",
      description: "Handle form submissions with built-in pending states",
      path: "/form-actions",
      icon: "📝",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "useOptimistic",
      description: "Optimistic updates for instant UI feedback",
      path: "/todo-optimistic",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "useDeferredValue",
      description: "Defer expensive re-renders for better performance",
      path: "/use-defered-value",
      icon: "🚀",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Products",
      description: "Browse the product catalog",
      path: "/products",
      icon: "🛒",
      color: "from-green-500 to-green-600",
    },
  ];

  const protectedFeatures = [
    {
      title: "Dashboard",
      description: "View your personalized dashboard",
      path: "/dashboard",
      icon: "📊",
      roles: ["user", "moderator", "admin"],
    },
    {
      title: "Users",
      description: "Browse users from JSONPlaceholder API",
      path: "/users",
      icon: "👥",
      roles: ["user", "moderator", "admin"],
    },
    {
      title: "Profile",
      description: "Manage your profile settings",
      path: "/profile",
      icon: "👤",
      roles: ["user", "moderator", "admin", "guest"],
    },
    {
      title: "Settings",
      description: "Configure application settings",
      path: "/settings",
      icon: "⚙️",
      roles: ["moderator", "admin"],
    },
    {
      title: "Admin Panel",
      description: "Full system administration",
      path: "/admin",
      icon: "🔐",
      roles: ["admin"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            React 19 Features
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore the latest React 19 features with role-based authentication
            and protected routes.
          </p>
          
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          ) : (
            <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-xl">
              <span className="text-2xl mr-2">👋</span>
              Welcome back, <span className="font-semibold ml-1">{user?.name}</span>!
            </div>
          )}
        </div>
      </section>

      {/* Public Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            React 19 Demos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.path}
                to={feature.path}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Protected Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Protected Routes
            </h2>
            <p className="text-gray-600">
              {isAuthenticated 
                ? `Access based on your role: ${user?.role}`
                : "Login to access these features"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {protectedFeatures.map((feature) => {
              const hasAccess = isAuthenticated && user && feature.roles.includes(user.role);
              
              return (
                <Link
                  key={feature.path}
                  to={isAuthenticated ? feature.path : "/login"}
                  className={`relative bg-gray-50 rounded-2xl p-6 border-2 transition-all ${
                    hasAccess 
                      ? "border-green-200 hover:border-green-400 hover:shadow-lg hover:-translate-y-1" 
                      : "border-gray-200 opacity-60 hover:opacity-80"
                  }`}
                >
                  {hasAccess && (
                    <span className="absolute top-4 right-4 text-green-500 text-lg">✓</span>
                  )}
                  {!isAuthenticated && (
                    <span className="absolute top-4 right-4 text-gray-400 text-lg">🔒</span>
                  )}
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {feature.roles.map((role) => (
                      <span
                        key={role}
                        className={`text-xs px-2 py-1 rounded-full ${
                          user?.role === role
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Role-Based Access Control
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { role: "Guest", color: "bg-gray-100 border-gray-300", access: "Limited" },
              { role: "User", color: "bg-blue-100 border-blue-300", access: "Standard" },
              { role: "Moderator", color: "bg-purple-100 border-purple-300", access: "Elevated" },
              { role: "Admin", color: "bg-red-100 border-red-300", access: "Full" },
            ].map((item) => (
              <div
                key={item.role}
                className={`${item.color} border-2 rounded-xl p-4 text-center`}
              >
                <h3 className="font-semibold text-gray-800">{item.role}</h3>
                <p className="text-sm text-gray-600">{item.access} Access</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
