import { Container, Title } from "./styles";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Title>{cat.toUpperCase()}</Title>
      <Products cat={cat} filters={filters} />
    </Container>
  );
};

export default ProductList;
