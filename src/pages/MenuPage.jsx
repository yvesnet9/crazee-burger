function MenuPage() {
  // Liste de produits fictifs
  const products = [
    { id: 1, name: "🍔 Burger Classique", price: 5.99 },
    { id: 2, name: "🍟 Frites", price: 2.99 },
    { id: 3, name: "🥤 Soda", price: 1.99 },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Menu</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} — {product.price} €
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuPage;
