import React from 'react';

import Item from '../../components/Item';

import { Container, List } from './styles';

const Services = () => (
    <Container>
        <div className="content">
            <h2>Atuação</h2>
            <List>
                <Item
                    ico="ico-01"
                    title="Psicóloga Clínica"
                    text="A psicoterapia é um processo focado em ajudar as pessoas a resolver seus problemas emocionais. <a href='#'>Clique aqui</a> e saiba mais sobre a abordagem Cognitiva Comportamental."
                />
                <Item
                    ico="ico-03"
                    title="Psicóloga Organizacional"
                    text="Atuação com o objetivo em aumentar e manter a qualidade de vida no trabalho por meio de um bom clima organizacional, condições favoráveis ao trabalho, desenvolvimento de pessoal e relação harmônica entre os funcionários."
                />
                <Item
                    ico="ico-02"
                    title="Desenvolvimento Humano"
                    text="Desenvolvimento de aspectos emocionais ampliando o olhar sobre si, sobre o outro e sobre o mundo."
                />
            </List>
        </div>
    </Container>
);

export default Services;
