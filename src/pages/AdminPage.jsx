import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

function AdminPage() {
  const [tab, setTab] = useState("products");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (tab === "orders") {
      const fetchOrders = async () => {
        try {
          const snapshot = await getDocs(collection(db, "orders"));
          const ordersList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setOrders(ordersList);
        } catch (err) {
          console.error("Erreur lors du chargement des commandes :", err);
        }
      };

      fetchOrders();
    }
  }, [tab]);

  return (
    <div>
      <h1>👨‍💼 Admin Panel</h1>
      <div>
        <button onClick={() => setTab("products")}>Produits</button>
        <button onClick={() => setTab("orders")}>Commandes</button>
      </div>

      {tab === "products" && <p>Gestion des produits ici...</p>}

      {tab === "orders" && (
        <div>
          <h2>📦 Toutes les commandes</h2>
          {orders.length === 0 ? (
            <p>Aucune commande trouvée.</p>
          ) : (
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
                  <strong>Commande {order.id}</strong> –{" "}
                  {order.items?.length || 0} produits – Total :{" "}
                  {order.total || 0} €
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminPage;
