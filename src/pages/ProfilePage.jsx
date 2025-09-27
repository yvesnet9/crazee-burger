// src/pages/ProfilePage.jsx
import { useAuth } from "../context/useAuth";

function ProfilePage() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Mon Profil</h1>
      {user ? (
        <p>Bienvenue, {user.email} 👋</p>
      ) : (
        <p>Aucun utilisateur connecté.</p>
      )}
    </div>
  );
}

export default ProfilePage;
