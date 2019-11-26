import styled, { createGlobalStyle } from 'styled-components';

import { colors, fonts } from './variables';
import { calcSizeVw } from './mixin';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        outline: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    html, body, #root{
        height: 100%;
        font-family: ${fonts.lato};
    }

    body{
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

    .content{
        max-width: 1170px;
        width: 100%;
        margin: 0 auto;
        padding: 0;
        position: relative;

        @media only screen and (max-width: 1170px){
            padding: 0 20px;
        }
    }

    h2{
        font-family: ${fonts.playfair};
        font-size: 60px;
        color: ${colors.red.hexa};
        position: relative;
        margin-bottom: 40px;
        text-align: center;
        line-height: 1;
    }

    h3{
        font-family: ${fonts.lato};
        font-size: 20px;
        color: ${colors.darkGray.hexa};
        line-height: 24px;
        position: relative;
        margin-bottom: 36px;
        text-align: center;
    }

    p{
        font-family: ${fonts.lato};
        font-size: 16px;
        color: ${colors.darkGray.hexa};
        line-height: 24px;
    }

    img{
        max-width: 100%;
        display: block;
    }

    @media only screen and (max-width: 1170px){
        h2{
            font-size: ${calcSizeVw(60, 1170)}vw;
            margin-bottom: ${calcSizeVw(40, 1170)}vw;
        }

        h3{
            font-size: ${calcSizeVw(20, 1170)}vw;
            margin-bottom: ${calcSizeVw(36, 1170)}vw;
        }

        p{
            font-size: ${calcSizeVw(16, 1170)}vw;
            line-height: ${calcSizeVw(24, 1170)}vw;
        }
    }

    @media only screen and (max-width: 1024px){
        h2{
            font-size: ${calcSizeVw(60, 1024)}vw;
            margin-bottom: ${calcSizeVw(40, 1024)}vw;
        }

        h3{
            font-size: ${calcSizeVw(20, 1024)}vw;
            margin-bottom: ${calcSizeVw(36, 1024)}vw;
        }

        p{
            font-size: ${calcSizeVw(16, 1024)}vw;
            line-height: ${calcSizeVw(24, 1024)}vw;
        }
    }

    @media only screen and (max-width: 770px){
        h2{
            font-size: ${calcSizeVw(60, 770)}vw;
            margin-bottom: ${calcSizeVw(40, 770)}vw;
        }

        h3{
            font-size: ${calcSizeVw(30, 770)}vw;
            margin-bottom: ${calcSizeVw(36, 770)}vw;
        }

        p{
            font-size: ${calcSizeVw(16, 770)}vw;
            line-height: ${calcSizeVw(24, 770)}vw;
        }
    }

    @media only screen and (max-width: 600px){
        h2{
            font-size: 30px;
            margin-bottom: 20px;
        }

        h3{
            font-size: 20px;
            line-height: 26px;
            margin-bottom: 20px;
        }

        p{
            font-size: 16px;
            line-height: 24px;
        }
    }
`;

export const Button = styled.button`
    border: 2px solid ${colors.red.hexa};
    padding: 17px 15px;
    color: ${colors.red.hexa};
    font-family: ${fonts.playfair};
    font-size: 14px;
    line-height: 1;
    background: ${colors.white.hexa};
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    @media only screen and (max-width: 1170px){
        border: ${calcSizeVw(2, 1170)}vw solid ${colors.red.hexa};
        padding: ${calcSizeVw(17, 1170)}vw ${calcSizeVw(15, 1170)}vw;
        font-size: ${calcSizeVw(14, 1170)}vw;
    }
    
    @media only screen and (max-width: 770px){
        border: 2px solid ${colors.red.hexa};
        padding: 15px 13px;
        font-size: 14px;
    }

    @media only screen and (max-width: 600px){
        max-width: 100%;
    }
`;
