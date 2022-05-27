import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 2rem;
  background-color: teal;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ fontSize: "12px", height: "1.5rem" })}
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
