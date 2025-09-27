import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      console.log("Tentative login avec:", email, password);
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Connexion réussie !");
      navigate("/order"); // on teste redirection vers /order plutôt que /
    } catch (err) {
      console.error("❌ Erreur Firebase:", err.message);
      setError("Échec de la connexion : " + err.message);
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <LoginForm onSubmit={handleLogin} error={error} />
    </div>
  );
}

export default LoginPage;
