import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 2rem;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProductItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #28a745;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #218838;
  }
`;

function MenuPage({ addToBasket }) {
  const products = [
    { id: 1, name: "Burger Classique", price: 5 },
    { id: 2, name: "Cheeseburger", price: 6 },
    { id: 3, name: "Double Burger", price: 8 },
  ];

  return (
    <Container>
      <h1>🍔 Menu</h1>
      <ProductList>
        {products.map((p) => (
          <ProductItem key={p.id}>
            <span>
              {p.name} - {p.price} €
            </span>
            <Button onClick={() => addToBasket(p)}>Ajouter</Button>
          </ProductItem>
        ))}
      </ProductList>
      <Link to="/basket">Voir le panier</Link>
    </Container>
  );
}

export default MenuPage;
