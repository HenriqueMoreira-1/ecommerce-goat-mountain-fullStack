import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  ${mobile({ padding: "0px", flexDirection: "column", marginBottom: "300px" })}
`;
