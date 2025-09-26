import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

function BasketPage() {
  return (
    <Container>
      <h1>🛒 Mon Panier</h1>
      <p>Votre panier est vide.</p>
    </Container>
  );
}

export default BasketPage;
