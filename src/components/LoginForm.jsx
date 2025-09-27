import { useState } from "react";

function LoginForm({ onSubmit, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Mot de passe :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      <button type="submit" enabled={!email || !password}>
        Se connecter
      </button>
    </form>
  );
}

export default LoginForm;
