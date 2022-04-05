import React from "react";
import { data } from "./data";
import { Container } from "./styles";

function SimpleTable() {
  return (
    <Container>
      <table>
        <tr>
          <th>Nome</th>
          <th>Raça</th>
          <th>Pelagem</th>
          <th>Data de Nascimento</th>
          <th>Sexo</th>
          <th>Proprietário</th>
          <th>Ações</th>
        </tr>
        {data.map((d) => (
          <tr id={d.idHorse}>
            <td>{d.name}</td>
            <td>{d.breed}</td>
            <td>{d.colorChart}</td>
            <td>{d.birthData}</td>
            <td>{d.gender}</td>
            <td>{d.owner}</td>
            <td>
              <a href={`/Edit/${d.idHorse}`}>Editar | </a>
              <a href={`/Viewer/${d.idHorse}`}>Visualizar</a>
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
}

export default SimpleTable;
