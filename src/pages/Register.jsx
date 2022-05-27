import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("images/register_background.jpeg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  ${mobile({ width: "75%" })}
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 8px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  flex: 1;
  min-width: 40%;
  margin: 8px 6px;
  padding: 10px;
`;
const Agreement = styled.p`
  margin: 15px 0;
`;
const Button = styled.button`
  width: 50%;
  border-radius: 10px;
  letter-spacing: 2px;
  border: none;
  padding: 15px;
  margin: 0 25%;
  background-color: teal;
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" type={"text"} />
          <Input placeholder="Last Name" type={"text"} />
          <Input placeholder="Username" type={"text"} />
          <Input placeholder="Email" type={"email"} />
          <Input placeholder="Password" type={"password"} />
          <Input placeholder="Confirm Password" type={"password"} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
        </Form>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
