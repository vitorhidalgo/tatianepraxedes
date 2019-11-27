import React, { useState } from 'react';
import Image from 'react-image-webp';

import { Icon } from '../icon';

import { 
    Container,
    Text,
    Title,
    Modal,
    Content,
    Button,
    TitleModal,
    TextModal,
    Link
} from './styles';
import { colors } from '../../styles/variables';

export default function Item(props) {
    const [ modal, setModal ] = useState(false);

    function eventModal() {
        setModal(!modal);
    }

    return (
        <>
            <Container>
                <Image
                    src={require(`../../images/${props.ico}.png`)}
                    webp={require(`../../images/${props.ico}.webp`)}
                />
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                {
                    (props.modal.length !== 0) && (
                        <Link onClick={() => eventModal()}>Saiba mais</Link>
                    )
                }
            </Container>
            {
                (props.modal.length !== 0 && modal) && 
                (
                    <Modal>
                        <Content>
                            <Button onClick={() => eventModal()}><Icon name="FaTimes" size={25} color={colors.white.hexa} /></Button>
                            <TitleModal>{props.modal.title}</TitleModal>
                            {
                                props.modal.content.map(text => (
                                    <TextModal>{text}</TextModal>
                                ))
                            }
                        </Content>
                    </Modal>
                )
            }
        </>
    );
}