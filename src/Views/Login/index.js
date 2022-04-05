import React, { useState } from "react";
import { Container, Form } from "./styles";
import Header from "../../Componentes/Header";
import Email from "../../Componentes/Inputs/Email";
import Password from "../../Componentes/Inputs/Password";
import SimpleButton from "../../Componentes/Buttons/SimpleButton";
function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <Header />
      <Container>
        <Form>
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
            disabled={email === "" || password === "" ? true : false}
            onClick={() => {}}
            text="Entrar"
          />
          <div>
            <a href="/register">Não tem uma conta? Cadastre-se</a>
            <a href="/recoverpassword">Esqueci a senha</a>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Login;
