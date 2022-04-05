import React from "react";
import Text from "../../Componentes/Inputs/Text";
import { Container, Bisavos, Avos, Pais } from "./styles";

function Pedigree() {
  return (
    <Container>
      <ul>
        <Bisavos>
          <Text disabled label="Bisavô Paterno" />
        </Bisavos>
        <Avos>
          <Text disabled label="Avô Paterno" />
        </Avos>
        <Bisavos>
          <Text disabled label="Bisavó Paterno" />
        </Bisavos>
        <Pais>
          <Text disabled label="Pai" />
        </Pais>
        <Bisavos>
          <Text disabled label="Bisavô Paterno" />
        </Bisavos>
        <Avos>
          <Text disabled label="Avó Paterno" />
        </Avos>
        <Bisavos>
          <Text disabled label="Bisavó Paterno" />
        </Bisavos>
      </ul>
      <ul>
        <Bisavos>
          <Text disabled label="Bisavô Materno" />
        </Bisavos>
        <Avos>
          <Text disabled label="Avô Materno" />
        </Avos>
        <Bisavos>
          <Text disabled label="Bisavó Materno" />
        </Bisavos>
        <Pais>
          <Text disabled label="Mãe" />
        </Pais>
        <Bisavos>
          <Text disabled label="Bisavô Materno" />
        </Bisavos>
        <Avos>
          <Text disabled label="Avó Materno" />
        </Avos>
        <Bisavos>
          <Text disabled label="Bisavó Materno" />
        </Bisavos>
      </ul>
    </Container>
  );
}

export default Pedigree;
