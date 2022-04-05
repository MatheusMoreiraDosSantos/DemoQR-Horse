import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: space-between;
    width: 300px;
    a {
      font-size: 13px;
      margin-top: 30px;
      color: #666;
      :hover {
        color: #000;
      }
    }
  }
  button {
    margin-top: 20px;
  }
`;
