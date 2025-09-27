// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #222;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 1000;
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
  const { user, isAdmin, logout } = useAuth();

  return (
    <NavbarContainer>
      <Logo>🍔 CrazeeBurger</Logo>
      <NavLinks>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Panier</Link>
        {user && <Link to="/orders">Mes commandes</Link>}
        {isAdmin && <Link to="/admin">Admin</Link>}
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={logout}>Déconnexion</button>
        )}
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
