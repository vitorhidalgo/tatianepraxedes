import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const Container = styled.div`
  background-color: ${(props) => props.inverted ? `${colors.darkRed.hexa}` : `${colors.white.hexa}`};
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1024px){
    padding: 20px 0;
  }

  @media only screen and (max-width: 600px){
    padding: 20px 0;
    
    img{
      width: 40%;
      margin: 0 auto;
    }
  }
`;
