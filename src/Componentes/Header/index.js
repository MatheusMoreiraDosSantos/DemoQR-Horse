import React from "react";
import { Container } from "./styles";

function Header({ showAccount = true, showHome = true, showLogout = true }) {
  const logout = () => {
    console.log("logout");
  };
  return (
    <Container>
      <h5>@ShowHorse</h5>
      <div>
        {showAccount && <a href="/account">Conta | </a>}
        {showHome && <a href="/home">Home | </a>}
        {showLogout && (
          <a href="/" onClick={logout}>
            Sair
          </a>
        )}
      </div>
    </Container>
  );
}

export default Header;
