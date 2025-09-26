import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar"; // 👈 import Navbar
import MenuPage from "./pages/MenuPage"; // 👈 import

function App() {
  return (
    <>
      <Navbar /> {/* 👈 navbar visible partout */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/menu" element={<MenuPage />} /> {/* 👈 nouvelle route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
