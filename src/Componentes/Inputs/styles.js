import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  span:first-child {
    margin-top: 20px;
    font-size: 12px;
    color: #666;
  }
  span {
    font-size: 12px;
    color: #ff4e4e;
  }
  > input {
    width: 300px;
    height: 20px;
    margin: 3px 0;
    font-size: 16px;
    padding: 4px;
    border: 2px solid #2c3f59;
  }
`;
