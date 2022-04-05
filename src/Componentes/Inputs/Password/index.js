import React, { useState } from "react";
import { Container } from "../styles";

function Password({
  name = "Senha",
  customAlert = "O Campo senha é obrigatório",
  required = false,
  ...props
}) {
  const [alert, setAlert] = useState("");
  const validation = (e) => {
    if (required) {
      if (e.target.value === "") {
        setAlert(customAlert);
        return;
      }
      setAlert("");
    }
  };
  return (
    <Container>
      <span>{name}</span>
      <input type="password" onBlur={validation} {...props} />
      <span>{alert}</span>
    </Container>
  );
}
export default Password;
