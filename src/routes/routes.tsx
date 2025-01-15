import { BrowserRouter, Routes, Route } from "react-router";
import ToDoList from "./pages/ToDoList";
import FormActions from "./pages/FormActions";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import UseDeferredValue from "./pages/UseDeferredValue";
import ProtectedRoute from "../components/ProtectedRoute";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-actions" element={<FormActions />} />
        <Route path="/todo-optimistic" element={<ToDoList />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/use-defered-value" element={<UseDeferredValue />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/protected-route" element={<h1>Protected Route</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
