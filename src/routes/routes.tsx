import { BrowserRouter, Routes, Route } from "react-router";
import ToDoList from "./pages/ToDoList";
import FormActions from "./pages/FormActions";
import Home from "./pages/Home";
import Users from "./pages/Users";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-actions" element={<FormActions />} />
        <Route path="/todo-optimistic" element={<ToDoList />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};
