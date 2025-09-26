import styled from "styled-components";
import { Link } from "react-router-dom";

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

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>🍔 CrazeeBurger</Logo>
      <NavLinks>
        <Link to="/login">Login</Link>
        <Link to="/order">Commander</Link>
        <Link to="/menu">Menu</Link> {/* 👈 ajout du lien Menu */}
      </NavLinks>
    </NavbarContainer>
  );
}

export default Navbar;
