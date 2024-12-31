import { BrowserRouter, Routes, Route } from "react-router";
import FormActions from "./pages/FormActions";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/form-actions" element={<FormActions />} />
      </Routes>
    </BrowserRouter>
  );
};
