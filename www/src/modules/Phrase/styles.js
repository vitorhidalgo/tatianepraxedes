import styled from 'styled-components';

import { colors, fonts } from '../../styles/variables';

export const Container = styled.div`
  background-color: ${colors.red.hexa};
  padding: 50px 0;

  @media only screen and (max-width: 600px){
    padding: 20px 0;
  }
`;

export const Text = styled.h4`
  font-family: ${fonts.playfair};
  font-size: 30px;
  color: ${colors.white.hexa};
  font-style: italic;
  text-align: center;

  @media only screen and (max-width: 600px){
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Author = styled.p`
  font-size: 20px;
  color: ${colors.white.hexa};
  text-align: center;
  margin-top: 15px;

  @media only screen and (max-width: 600px){
    font-size: 14px;
    line-height: 20px;
  }
`;
