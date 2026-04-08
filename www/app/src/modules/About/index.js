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
        <h3>Acredito que buscar ajuda é um ato de coragem. Meu trabalho é estar ao seu lado nesse processo — com escuta genuína, técnica sólida e respeito pelo seu tempo.</h3>
        <p>
          Sou psicóloga desde 2004, com especializações em quatro abordagens: <strong>Terapia Cognitivo-Comportamental (TCC), Terapia dos Esquemas, Terapia Comportamental Dialética (DBT) e em psicologia organizacional.</strong> <br />
          Ao longo desses mais de 20 anos, acompanhei centenas de pessoas em momentos de crise, transição e crescimento.<br /><br />
          Cada pessoa chega com uma história diferente. Por isso, adapto o trabalho de acordo com o que você precisa — seja entender padrões que se repetem na sua vida, aprender a lidar com emoções intensas, ou simplesmente ter um espaço seguro para pensar.
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
