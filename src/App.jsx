import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      {/* Redirection de la racine vers /login */}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
