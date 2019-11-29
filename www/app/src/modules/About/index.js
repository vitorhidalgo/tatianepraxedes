import React from 'react';

import Image from 'react-image-webp';

import { Container, Left, Right } from './styles';

const About = () => (
    <Container>
        <div className="content">
            <Left>
                <h2>Prazer, sou a<br />Tatiane Praxedes</h2>
                <h3>Sou Psicóloga com formação em Psicologia Cognitiva Comportamental e especialista em Psicologia Organizacional.</h3>
                <p>Atuo na clínica com atendimentos individuais focando o tratamento de problemas emocionais e nas organizações com a promoção de saúde emocional e desenvolvimento de pessoas. Atuo como Psicóloga desde 2004.</p>
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
