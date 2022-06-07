import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 95vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
export const ImgContainer = styled.div`
  width: 60%;
  margin: 0;
  box-shadow: rgb(0 0 0 / 75%) 11px 2px 48px -32px;
  ${mobile({ width: "0px" })}
`;
export const Image = styled.img`
  background: url("https://i.pinimg.com/originals/e3/c6/35/e3c63580c025b269a476b20219689f64.jpg")
    rgba(0, 0, 0, 0.5);
  background-position: center center;
  background-size: cover;
  background-blend-mode: color;
  box-shadow: rgb(0 0 0 / 5%) 11px 2px 48px;
  width: 100%;
  height: 100vh;
`;
export const InfoContainer = styled.div`
  padding: 20px;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ width: "100%" })}
`;
export const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const Description = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  color: #ffffff;
  background-color: #1e2022;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
