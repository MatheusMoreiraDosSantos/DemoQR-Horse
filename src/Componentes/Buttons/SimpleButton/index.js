import React from "react";

import { Button } from "./styles";

function SimpleButton({ text = "Defina um texto", disabled }) {
  return <Button disabled={disabled}>{text}</Button>;
}

export default SimpleButton;
