import React from "react";

import Image from "react-image-webp";

import { Container, Left, Right } from "./styles";

const About = () => (
  <Container>
    <div className="content">
      <Left>
        <h2>
          Prazer, sou a<br />
          Tatiane Praxedes
        </h2>
        <h3>
          Sou psicóloga clínica com formação em{" "}
          <strong>Terapia Cognitiva Comportamental (TCC)</strong>,{" "}
          <strong>Terapia dos Esquemas</strong>,{" "}
          <strong>Terapia Comportamental Dialética (DBT)</strong> e{" "}
          <strong>Terapias Contextuais.</strong> Parte da minha história
          profissional também foi dedicada à psicologia organizacional, da qual
          também sou especialista.
        </h3>
        <p>
          Minha missão é promover saúde mental ajudando as pessoas a lidar com
          suas dores emocionais.
        </p>
        <Image
          src={require("../../images/logo-gray.png")}
          webp={require("../../images/logo-gray.webp")}
          alt="Assinatura Tatiane Praxedes"
          width="148"
          height="58"
        />
      </Left>
      <Right>
        <Image
          src={require("../../images/img-tatiane-small.png")}
          webp={require("../../images/img-tatiane-small.webp")}
          alt="Psicóloga especialista em ansiedade realizando atendimento"
          width="407"
          height="407"
        />
      </Right>
    </div>
  </Container>
);

export default About;
