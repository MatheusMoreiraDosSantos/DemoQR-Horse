import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  table {
    tr {
      th {
        padding: 5px;
      }
      td {
        padding: 5px 50px;
        a {
          color: #666;
          text-decoration: none;
          :hover {
            color: #000;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
