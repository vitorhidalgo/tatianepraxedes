import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const Container = styled.div`
    padding: 40px 0 0 0;

    h2{
        color: ${colors.darkGray.hexa};
        margin-bottom: 10px;
    }

    h3{
        font-weight: normal;
    }

    @media only screen and (max-width: 600px){
        width: 100%;
        padding: 0;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-top: 30px;

    @media only screen and (max-width: 770px){
        flex-wrap: wrap;
    }
`;