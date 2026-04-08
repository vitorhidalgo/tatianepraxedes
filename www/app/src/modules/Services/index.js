import React from 'react';

import Item from '../../components/Item';

import { Container, List } from './styles';
import { services } from '../../data/services.json';

const Services = () => (
    <Container>
        <div className="content content-full">
            <h2>Psicóloga Ajudo adultos a vencer a <br />ansiedade e o estresse</h2>
            <List>
                {
                    services.map(service => (
                        <Item
                            key={service.key}
                            ico={service.ico}
                            title={service.title}
                            text={service.text}
                            modal={service.modal}
                        />
                    ))
                }
            </List>
        </div>
    </Container>
);

export default Services;
