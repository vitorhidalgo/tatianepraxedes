import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const Container = styled.div`
    background-color: ${colors.lightGray.hexa};
    padding: 20px 0;

    span{
        padding: 0 10px;
    }

    a{
        color: ${colors.black.hexa};
        display: flex;
        font-size: 14px;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        i{
            margin-right: 5px;
            display: inherit;
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