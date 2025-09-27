import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a,
  button {
    color: white;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("✅ Utilisateur déconnecté");
      navigate("/login");
    } catch (error) {
      console.error("Erreur de déconnexion :", error);
    }
  };

  return (
    <NavbarContainer>
      <Logo>🍔 CrazeeBurger</Logo>
      <NavLinks>
        {!user && <Link to="/login">Login</Link>}
        <Link to="/order">Commander</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/admin">Admin</Link>
        {user && <button onClick={handleLogout}>Déconnexion</button>}
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
