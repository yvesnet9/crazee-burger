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

const OrderList = styled.ul`
  list-style: none;
  padding: 0;
`;

const OrderItem = styled.li`
  margin-bottom: 0.75rem;
  padding: 0.75rem;
  background: #f1f1f1;
  border-radius: 4px;
`;

function AdminPage() {
  const [activeTab, setActiveTab] = useState("produits");

  const [orders] = useState([
    { id: 1, client: "Alice", items: ["Burger Classic", "Frites"] },
    { id: 2, client: "Bob", items: ["Cheese Burger", "Coca-Cola"] },
    { id: 3, client: "Charlie", items: ["Double Burger", "Milkshake"] },
  ]);

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
            <p>(Fonctionnalité déjà implémentée en F08)</p>
          </>
        )}

        {activeTab === "commandes" && (
          <>
            <h2>Liste des commandes</h2>
            <OrderList>
              {orders.map((order) => (
                <OrderItem key={order.id}>
                  <strong>Commande #{order.id}</strong> – {order.client}
                  <br />
                  Produits : {order.items.join(", ")}
                </OrderItem>
              ))}
            </OrderList>
          </>
        )}
      </Content>
    </Container>
  );
}

export default AdminPage;
