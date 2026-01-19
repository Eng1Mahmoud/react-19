import { BrowserRouter, Routes, Route } from "react-router";
import ToDoList from "./pages/ToDoList";
import FormActions from "./pages/FormActions";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import UseDeferredValue from "./pages/UseDeferredValue";
import ProtectedRoute from "../components/ProtectedRoute";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import Settings from "./pages/Settings";
import Header from "../components/Header";
import NotFound from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/form-actions" element={<FormActions />} />
        <Route path="/todo-optimistic" element={<ToDoList />} />
        <Route path="/use-defered-value" element={<UseDeferredValue />} />
        <Route path="/products" element={<ProductList />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        
        {/* Protected Routes - Require Authentication */}
        <Route element={<ProtectedRoute requireAuth={true} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Protected Routes - User, Moderator, or Admin */}
        <Route element={<ProtectedRoute allowedRoles={['user', 'moderator', 'admin']} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Route>

        {/* Protected Routes - Moderator or Admin only */}
        <Route element={<ProtectedRoute allowedRoles={['moderator', 'admin']} />}>
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Protected Routes - Admin only */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AdminPanel />} />
        </Route>

        {/* 404 - Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
