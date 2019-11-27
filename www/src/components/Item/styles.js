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

export const TitleModal = styled(Title)`
    color: ${colors.darkRed.hexa};
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

export const TextModal = styled(Text)`
    text-align: left;
    margin-top: 20px;
`;

export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(${colors.black.rgb}, .7);
    z-index: 10;
    color: ${colors.white.hexa};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 900px;
    height: auto;
    position: relative;
    background-color: ${colors.white.hexa};
    overflow: auto;
    color: ${colors.darkGray.hexa};
    padding: 100px 50px 50px 50px;
`;

export const Button = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${colors.darkRed.hexa};
    position: absolute;
    top: 30px;
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    cursor: pointer;

    &:hover{
        background-color: ${colors.red.hexa};
    }
`;

export const Link = styled.a`
    color: ${colors.darkRed.hexa};
    text-decoration: underline;
    cursor: pointer;
    margin-top: 10px;

    &:hover{
        color: ${colors.red.hexa};
    }
`;