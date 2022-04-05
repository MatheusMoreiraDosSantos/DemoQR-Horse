import React from "react";
import Header from "../../Componentes/Header";
import Pedigree from "../../Componentes/Pedigree";
import {
  Container,
  Bio,
  ImageProfile,
  ContainerDescription,
  HeaderDescription,
  TextDescription,
  ContainerImages,
} from "./styles";

function Viewer() {
  return (
    <>
      <Header />
      <Container>
        <Bio>
          <ImageProfile></ImageProfile>
          <ContainerDescription>
            <HeaderDescription>
              Secret HollyGun QR - QM - Castanho | Garanhão
            </HeaderDescription>
            <TextDescription>
              <ul>
                <li>Marcelo Moreira Dos Santos</li>
                <li>02/02/2012</li>
                <li>
                  HOLLYWOOD GOTTA GUN Importado.U$ 115,520,00 e 23 pts AQHA:
                  4o.L NRHA Futurity Open, Finalista NRHA Derby e NRBC Open. É o
                  Reprodutor no.1 ANCR 2019/2020 e 2020/2021; ABQM Awards 2020,
                  e seus filhos ja somam 371 pts. em 09 modalidades e:R$
                  201.701,00 ANCR, entre eles: GPS WAS YOUR JOHNY, Campeão Potro
                  Futuro ANCR Ab N4; JUST IN HOLLYGUN QR, Campeão Potro Futuro
                  ANCR Ab N4; PRINCESS GOTTA FRN, 49 pts ABQM, Campeã Potro do
                  Futuro ABQM Laço Comprido Am; BABY BALL GUN, Campeã Potro do
                  Futuro ABQM Ranch Sorting; TOP GOTTA GUN, 22,5 pts ABQM,
                  Campeão Potro do Futuro ABQM Rédeas Ab; GOTTA GUN PLAYER LEC,
                  60,5 pts ABQM; RED DUST HOLLYGUN QR, entre outros. REMINIC N
                  DUNIT U$ 169.665,00: Bi Campeão NRBC Open. Nos EUA Seus filhos
                  já ganharam mais de U$ 709,5 mil e 1.982 pts AQHA entre eles
                  DUNIT WITH A SPLAH, U$ 83.635; RUDY DUNIT, U$ 73.338; THE
                  SARGEANT DUNNIT, U$ 55.753. No Brasil, 2X Reprodutor do Ano
                  ANCR ; 2X ABQM Awards Reprodutor Rédeas e Western Pleasure;
                  tendo seus filhos ganhos de R$ 184.351,00 ANCR, e 255,5 pts
                  ABQM, produzindo ganhadores em 11 modalidades, entre eles:
                  GOLD RED DUNIT, REMI STAR WHIZ, DOMINIC DUNIT, ; MYSTI N DUNIT
                  ; TT SIMPLYTHEBEST DAN; BUTTERFLY N DUNIT ; SPARK N REMINIC
                  DAN; OVER REMI DAN; REMINIC GAMAY, etc...
                </li>
              </ul>
            </TextDescription>
          </ContainerDescription>
        </Bio>
        <Pedigree />
        <ContainerImages></ContainerImages>
      </Container>
    </>
  );
}

export default Viewer;
