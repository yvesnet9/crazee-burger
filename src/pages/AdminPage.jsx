import { useState } from "react";
import styled from "styled-components";

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
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

function AdminPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Burger Classique", price: 5 },
    { id: 2, name: "Cheeseburger", price: 6 },
  ]);

  const handleEdit = (id, field, value) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, [field]: field === "price" ? Number(value) : value }
          : p
      )
    );
  };

  return (
    <Container>
      <h1>Panel Admin – Édition Produits</h1>
      <ProductList>
        {products.map((p) => (
          <ProductItem key={p.id}>
            <Input
              type="text"
              value={p.name}
              onChange={(e) => handleEdit(p.id, "name", e.target.value)}
            />
            <Input
              type="number"
              value={p.price}
              onChange={(e) => handleEdit(p.id, "price", e.target.value)}
            />
            <Button>💾 Sauvegarder</Button>
          </ProductItem>
        ))}
      </ProductList>
    </Container>
  );
}

export default AdminPage;
