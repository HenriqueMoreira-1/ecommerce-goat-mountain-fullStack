import {
  Container,
  Wrapper,
  Left,
  Right,
  Center,
  Logo,
  SearchContainer,
  Input,
  MenuItem,
  IconButton,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="" />
            <SearchIcon
              style={{ color: "gray", fontSize: 16, cursor: "pointer" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>GOAT MOUNTAIN</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart" style={{ color: "black" }}>
            <MenuItem>
              <IconButton>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
