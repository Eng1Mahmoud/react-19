import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../context/user/UserContextValue";
import { UserRole } from "../types/context";

interface ProtectedRouteProps {
  children?: React.ReactNode;
  allowedRoles?: UserRole[];
  requireAuth?: boolean;
}

const ProtectedRoute = ({ 
  children, 
  allowedRoles,
  requireAuth = true 
}: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useUserContext();

  if (requireAuth && !isAuthenticated) {
 
    return <Navigate to="/login"  />;
  }

  // Check if user has the required role
  if (user && allowedRoles && allowedRoles.length > 0) {
    if (!allowedRoles.includes(user.role)) {
      // Redirect to unauthorized if role doesn't match
      return <Navigate to="/unauthorized"/>;
    }
  }

  // Render children if provided, otherwise render Outlet for nested routes
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;