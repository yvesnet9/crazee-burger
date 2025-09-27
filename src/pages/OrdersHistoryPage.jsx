import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

function OrdersHistoryPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      try {
        const q = query(
          collection(db, "orders"),
          where("userId", "==", user.uid)
        );
        const snapshot = await getDocs(q);
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
  }, [user]);

  if (!user) {
    return <p>❌ Vous devez être connecté pour voir vos commandes.</p>;
  }

  return (
    <div>
      <h1>📦 Mon historique de commandes</h1>
      {orders.length === 0 ? (
        <p>Aucune commande trouvée.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <strong>Commande {order.id}</strong> – {order.items?.length || 0}{" "}
              produits – Total : {order.total || 0} €
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrdersHistoryPage;
