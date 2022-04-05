import React, { useState } from "react";
import { Container, Form } from "./styles";
import Header from "../../Componentes/Header";
import Text from "../../Componentes/Inputs/Text";
import SimpleButton from "../../Componentes/Buttons/SimpleButton";
import SimpleTable from "../../Componentes/Tables/Simple";

function Home() {
  const [pesquisa, setPesquisa] = useState("");
  return (
    <>
      <Header />
      <Container>
        <Form>
          <Text
            value={pesquisa}
            label="Pesquisa"
            onChange={(e) => setPesquisa(e.target.value)}
          />
          <SimpleButton
            disabled={pesquisa === "" && true}
            onClick={() => {}}
            text="Pesquisar"
          />
        </Form>
        <SimpleTable />
      </Container>
    </>
  );
}

export default Home;
