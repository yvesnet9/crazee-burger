import { useCart } from "../context/CartContext";

const sampleProducts = [
  { id: 1, name: "🍔 Burger Classique", price: 5.99 },
  { id: 2, name: "🍟 Frites", price: 2.99 },
  { id: 3, name: "🥤 Soda", price: 1.99 },
];

function MenuPage() {
  const { addToCart } = useCart();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Menu CrazeeBurger</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {sampleProducts.map((product) => (
          <li
            key={product.id}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <strong>{product.name}</strong> - {product.price.toFixed(2)}€
            <br />
            <button
              onClick={() => addToCart(product)}
              style={{
                marginTop: "0.5rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
              }}
            >
              Ajouter au panier
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuPage;
