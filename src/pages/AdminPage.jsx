import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: #333;
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TabButton = styled.button`
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? "#007bff" : "#e0e0e0")};
  color: ${({ active }) => (active ? "white" : "#333")};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ active }) => (active ? "#0056b3" : "#cfcfcf")};
  }
`;

const Content = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: #f8f8f8;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.25rem 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ variant }) =>
    variant === "danger" ? "#dc3545" : "#28a745"};
  color: white;

  &:hover {
    background: ${({ variant }) =>
      variant === "danger" ? "#a71d2a" : "#1e7e34"};
  }
`;

function AdminPage() {
  const [activeTab, setActiveTab] = useState("produits");
  const [products, setProducts] = useState(["Burger Classic", "Burger Cheese"]);
  const [newProduct, setNewProduct] = useState("");

  const handleAdd = () => {
    if (newProduct.trim() !== "") {
      setProducts([...products, newProduct]);
      setNewProduct("");
    }
  };

  const handleDelete = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Title>Admin Panel</Title>
      <Tabs>
        <TabButton
          active={activeTab === "produits"}
          onClick={() => setActiveTab("produits")}
        >
          Produits
        </TabButton>
        <TabButton
          active={activeTab === "commandes"}
          onClick={() => setActiveTab("commandes")}
        >
          Commandes
        </TabButton>
      </Tabs>

      <Content>
        {activeTab === "produits" && (
          <>
            <h2>Gestion des produits</h2>
            <input
              type="text"
              value={newProduct}
              onChange={(e) => setNewProduct(e.target.value)}
              placeholder="Nom du produit"
            />
            <Button onClick={handleAdd}>Ajouter</Button>

            <ProductList>
              {products.map((p, index) => (
                <ProductItem key={index}>
                  {p}
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    Supprimer
                  </Button>
                </ProductItem>
              ))}
            </ProductList>
          </>
        )}

        {activeTab === "commandes" && (
          <>
            <h2>Gestion des commandes</h2>
            <p>À implémenter plus tard 🚀</p>
          </>
        )}
      </Content>
    </Container>
  );
}

export default AdminPage;
