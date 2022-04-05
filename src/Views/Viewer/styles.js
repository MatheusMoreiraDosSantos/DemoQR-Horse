import styled from "styled-components";
import avatar from "../../assets/avatar.jpg";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Bio = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 16% 84%;
`;
export const ImageProfile = styled.div`
  width: 130px;
  height: 130px;
  background-image: url(${avatar});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;
export const ContainerDescription = styled.div``;
export const TextDescription = styled.div`
  ul {
    list-style-type: none;
    li {
      margin-top: 10px;
      text-align: justify;
      padding: 5px;
    }
  }
`;
export const HeaderDescription = styled.div`
  font-size: 18px;
  padding: 5px;
`;
export const ContainerImages = styled.div``;
