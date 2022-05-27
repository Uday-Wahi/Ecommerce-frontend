import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("images/login_background.jpeg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
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
  flex-direction: column;
`;
const Input = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  flex: 1;
  min-width: 40%;
  margin: 8px 6px;
  padding: 10px;
`;
const Button = styled.button`
  width: 48%;
  border-radius: 10px;
  letter-spacing: 2px;
  border: none;
  padding: 15px 0;
  margin: 16px 6px;
  background-color: teal;
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;
const Link = styled.a`
  display: flex;
  justify-content: center;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" type={"text"} />
          <Input placeholder="Password" type={"password"} />
        </Form>
        <Button>LOGIN</Button>
        <Link style={{ marginBottom: "10px" }}>FORGOT PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
