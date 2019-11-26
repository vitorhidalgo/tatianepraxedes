import styled from 'styled-components';

import { colors, fonts } from '../../styles/variables';

export const Container = styled.li`
    width: 33.3333%;
    padding: 0 15px 50px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 770px){
        width: 100%;
        padding: 0 10px 20px 10px;
    }

    @media only screen and (max-width: 600px){
        width: 100%;
        padding: 0 0 30px 0;

        img{
            max-width: 40%;
        }

        &:last-child{
            padding-bottom: 0;
        }
    }
`;

export const Title = styled.h3`
    font-family: ${fonts.playfair};
    color: ${colors.darkGray.hexa};
    margin-bottom: 10px;
    text-align: center;
`;

export const Text = styled.p`
    font-family: ${fonts.lato};
    font-size: 16px;
    line-height: 24px;
    color: ${colors.gray.hexa};
    text-align: center;

    a{
        color: ${colors.red.hexa};
    }
`;