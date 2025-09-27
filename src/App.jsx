import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";
import OrdersHistoryPage from "./pages/OrdersHistoryPage";
import AdminPage from "./pages/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Pages publiques */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/cart" element={<CartPage />} />

      {/* Historique utilisateur (protégé) */}
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrdersHistoryPage />
          </ProtectedRoute>
        }
      />

      {/* Page de commande (protégée) */}
      <Route
        path="/order"
        element={
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        }
      />

      {/* Admin (protégé + adminOnly) */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly>
            <AdminPage />
          </ProtectedRoute>
        }
      />

      {/* Redirection par défaut */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
