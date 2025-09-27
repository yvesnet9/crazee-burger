import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, adminOnly = false }) {
  const { user, isAdmin } = useAuth();

  // ❌ Pas connecté → retour login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // ❌ Si route adminOnly et user pas admin → retour dashboard
  if (adminOnly && !isAdmin) {
    return <Navigate to="/dashboard" />;
  }

  // ✅ Sinon on affiche la page
  return children;
}

export default ProtectedRoute;
