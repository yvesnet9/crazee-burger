import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import ErrorPage from "./pages/ErrorPage";
import MenuPage from "./pages/MenuPage";
import AdminPage from "./pages/AdminPage";
import BasketPage from "./pages/BasketPage";

function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((prev) => [...prev, product]);
  };

  const removeFromBasket = (index) => {
    setBasket((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/menu" element={<MenuPage addToBasket={addToBasket} />} />
        <Route
          path="/basket"
          element={
            <BasketPage basket={basket} removeFromBasket={removeFromBasket} />
          }
        />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
