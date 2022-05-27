import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  background: turquoise;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.p`
  text-decoration: underline;
`;
const SummaryItemPrice = styled.p`
  text-decoration: underline;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border: none;
`;

const Summary = ({ props }) => {
  return (
    <Container>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      <SummaryItem>
        <SummaryItemText>SubTotal</SummaryItemText>
        <SummaryItemPrice>$ {props.subtotal}</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Estimated Shipping</SummaryItemText>
        <SummaryItemPrice>$ {props.estimatedShipping}</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Shipping Discount</SummaryItemText>
        <SummaryItemPrice>$ {props.shippingDiscount}</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem type="total">
        <SummaryItemText>Total</SummaryItemText>
        <SummaryItemPrice>$ {props.total} </SummaryItemPrice>
      </SummaryItem>
      <Button>CHECKOUT NOW</Button>
    </Container>
  );
};

export default Summary;
