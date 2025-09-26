import { useState } from "react";
import styled from "styled-components";

// 🔹 Définition d’un bouton stylé avec styled-components
const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #28a745; /* vert */
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #1e7e34; /* vert plus foncé */
  }
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentative de connexion avec :", email, password);
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* 🔹 Ici on utilise le bouton stylé */}
        <Button type="submit">Se connecter</Button>
      </form>
    </div>
  );
}

export default LoginPage;
