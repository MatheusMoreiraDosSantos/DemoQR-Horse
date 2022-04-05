import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  height: 35px;
  background: #2c3f59;
  border: none;
  color: #fff;
  font-size: 16px;
  font-family: "Roboto";
  :active {
    background: #000;
  }
  :disabled {
    color: #666;
  }
`;
