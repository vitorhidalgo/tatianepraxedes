import React from 'react';
import Image from 'react-image-webp';

import { Container, Text, Title } from './styles';

const Item = (props) => (
    <Container>
        <Image
            src={require(`../../images/${props.ico}.png`)}
            webp={require(`../../images/${props.ico}.webp`)}
        />
        <Title>{props.title}</Title>
        <Text dangerouslySetInnerHTML={{__html: props.text}} />
    </Container>
);

export default Item;
