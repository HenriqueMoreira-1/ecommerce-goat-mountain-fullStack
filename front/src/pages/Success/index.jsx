import { Container } from "./styles";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <Container>
      Successfull. Your order is being prepared...
      <Link to="/">
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </Container>
  );
};

export default Success;
