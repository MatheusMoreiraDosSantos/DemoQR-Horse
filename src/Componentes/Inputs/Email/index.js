import React, { useState } from "react";
import { Container } from "../styles";

function Email({
  name = "E-mail",
  customAlert = "O Campo E-mail é obrigatório",
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
      <input type="email" onBlur={validation} {...props} />
      <span>{alert}</span>
    </Container>
  );
}

export default Email;
