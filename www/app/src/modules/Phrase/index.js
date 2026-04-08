import React from 'react';

import { Container, Text, Author } from './styles';

const Phrase = () => (
    <Container>
        <div className="content">
            <Text>"Podemos não só aprender a lidar com o nosso sofrimento mais facilmente, mas evitar que muito dele surja."</Text>
            <Author>Dalai Lama</Author>
        </div>
    </Container>
);

export default Phrase;
