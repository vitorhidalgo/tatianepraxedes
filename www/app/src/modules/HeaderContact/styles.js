import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const Container = styled.header`
    background-color: ${colors.red.hexa};
    padding: 20px 0;
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 10;

    span{
        padding: 0 10px;
        color: ${colors.white.hexa};
    }

    a{
        color: ${colors.white.hexa};
        display: flex;
        font-size: 14px;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        i{
            margin-right: 5px;
            display: inherit;
        }

        &:hover {
            text-decoration: underline;
        }
    }

    .content{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    @media only screen and (max-width: 1024px){
        padding: 20px 0;
    }

    @media only screen and (max-width: 600px){
        padding: 10px 0;
        
        .content{
            display: flex;
            flex-wrap: wrap;
        }

        a{
            width: 100%;
            font-size: 16px;
            display: flex;
            padding: 5px 0;
        }

        span{
            display: none;
        }
    }
`;