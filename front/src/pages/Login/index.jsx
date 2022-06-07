import {
  Container,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Input,
  Button,
  Form,
  Error,
} from "./styles";

import Navbar from "../../components/Navbar";
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <>
      <Navbar />
      <Container>
        <ImgContainer>
          <Image />
        </ImgContainer>
        <InfoContainer>
          <Title>Already have an account? </Title>
          <Description>Login with your username and password</Description>
          <Form>
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </Form>
          <Button onClick={handleClick} disable={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
        </InfoContainer>
      </Container>
    </>
  );
};

export default Login;
