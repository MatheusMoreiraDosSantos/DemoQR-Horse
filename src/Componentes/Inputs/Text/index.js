import React, { useState } from "react";
import { Container } from "../styles";

function Text({
  label = "Defina uma label",
  customAlert = `O Campo ${label} é obrigatório`,
  required = false,
  disabled,
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
      <span>{label}</span>
      <input
        type="text"
        disabled={disabled && true}
        onBlur={validation}
        {...props}
      />
      <span>{alert}</span>
    </Container>
  );
}

export default Text;
