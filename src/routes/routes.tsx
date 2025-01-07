import { BrowserRouter, Routes, Route } from "react-router";
import ToDoList from "./pages/ToDoList";
import FormActions from "./pages/FormActions";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Comments from "./pages/Comments";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-actions" element={<FormActions />} />
        <Route path="/todo-optimistic" element={<ToDoList />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
};
