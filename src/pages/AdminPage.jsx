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

function AdminPage() {
  const [activeTab, setActiveTab] = useState("produits");

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
            <p>Liste et actions sur les produits.</p>
          </>
        )}
        {activeTab === "commandes" && (
          <>
            <h2>Gestion des commandes</h2>
            <p>Liste et actions sur les commandes.</p>
          </>
        )}
      </Content>
    </Container>
  );
}

export default AdminPage;
