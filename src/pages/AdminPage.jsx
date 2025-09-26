import { useState } from "react";

function AdminPage() {
  const [activeTab, setActiveTab] = useState("produits");

  return (
    <div>
      <h1>Admin Panel</h1>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => setActiveTab("produits")}>Produits</button>
        <button onClick={() => setActiveTab("commandes")}>Commandes</button>
      </div>

      {activeTab === "produits" && (
        <div>
          <h2>Gestion des produits</h2>
          <p>Liste et actions sur les produits.</p>
        </div>
      )}
      {activeTab === "commandes" && (
        <div>
          <h2>Gestion des commandes</h2>
          <p>Liste et actions sur les commandes.</p>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
