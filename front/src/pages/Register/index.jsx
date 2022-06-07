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
} from "./styles";

import Navbar from "../../components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <Container>
        <ImgContainer>
          <Image />
        </ImgContainer>
        <InfoContainer>
          <Title>Do not have an account?</Title>
          <Description>Register with your e-mail and password</Description>
          <Form>
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
          </Form>
          <Button>REGISTER</Button>
        </InfoContainer>
      </Container>
    </>
  );
};

export default Register;
