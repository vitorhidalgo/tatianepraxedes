import React from 'react';

import Image from 'react-image-webp';

import { Container, Left, Right } from './styles';

const About = () => (
    <Container>
        <div className="content">
            <Left>
                <h2>Prazer, sou a<br />Tatiane Praxedes</h2>
                <h3>Sou psicóloga clínica com formação em terapia cognitiva comportamental (TCC), terapia dos esquemas, terapia dialética comportamental (DBT) e terapias contextuais. Parte da minha história profissional também foi dedicada à psicologia organizacional, da qual também sou especialista.</h3>
                <p>Minha missão é promover saúde mental ajudando as pessoas a lidar com suas dores emocionais.</p>
                <Image
                    src={require('../../images/logo-gray.png')}
                    webp={require('../../images/logo-gray.webp')}
                />
            </Left>
            <Right>
                <Image
                    src={require('../../images/tatiane.png')}
                    webp={require('../../images/tatiane.webp')}
                />
            </Right>
        </div>
    </Container>
);

export default About;
