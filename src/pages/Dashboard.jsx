import { useAuth } from "../context/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

function Dashboard() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("🚪 Déconnecté avec succès");
    } catch (err) {
      console.error("❌ Erreur lors de la déconnexion :", err.message);
    }
  };

  return (
    <div>
      <h1>Bienvenue sur ton espace utilisateur 🎉</h1>
      <p>Email connecté : {user?.email}</p>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
}

export default Dashboard;
