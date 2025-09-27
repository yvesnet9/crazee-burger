import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>🛒 Mon Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} €
              <button onClick={() => removeFromCart(index)}>
                ❌ Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
