import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;

const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #dc3545;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: #c82333;
  }
`;

function BasketPage({ basket, removeFromBasket }) {
  return (
    <Container>
      <h1>🛒 Mon Panier</h1>
      {basket.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {basket.map((item, index) => (
            <ProductItem key={index}>
              <span>
                {item.name} - {item.price} €
              </span>
              <Button onClick={() => removeFromBasket(index)}>
                ❌ Retirer
              </Button>
            </ProductItem>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default BasketPage;
