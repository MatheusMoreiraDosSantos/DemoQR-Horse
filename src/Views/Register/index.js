import React, { useState } from "react";
import { Container, Form } from "./styles";
import Header from "../../Componentes/Header";
import Email from "../../Componentes/Inputs/Email";
import Text from "../../Componentes/Inputs/Text";
import Password from "../../Componentes/Inputs/Password";
import SimpleButton from "../../Componentes/Buttons/SimpleButton";

function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  return (
    <>
      <Header />
      <Container>
        <Form>
          <Text
            value={name}
            label="Nome"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Email
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Password
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <SimpleButton
            disabled={
              email === "" || password === "" || name === "" ? true : false
            }
            onClick={() => {}}
            text="Salvar"
          />
          <div>
            <a href="/">Já tenho uma conta. Quero fazer login.</a>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Register;
