import styled from 'styled-components';

import { colors, fonts } from '../../styles/variables';

export const Footer = styled.footer`
    padding: 20px 0;
    background-color: ${colors.red.hexa};

    p{
        color: ${colors.white.hexa};
        text-align: center;
        font-family: ${fonts.lato};
        font-size: 14px;
        font-weight: bold;
    }
`;