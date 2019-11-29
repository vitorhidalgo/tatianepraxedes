import React from 'react';

import Image from 'react-image-webp';

import { Container } from './styles';

const ModuleLogo = (props) => (
    <Container inverted={props.inverted}>
        <Image
            src={require(props.inverted ? `../../images/logo-invert.png` : `../../images/logo.png`)}
            webp={require(props.inverted ? `../../images/logo-invert.webp` : `../../images/logo.webp`)}
        />
    </Container>
);

export default ModuleLogo;
