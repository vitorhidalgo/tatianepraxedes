import styled from 'styled-components';

import { colors } from '../../styles/variables';

export const Container = styled.div`
  padding: 50px 0;
  background-color: ${colors.white.hexa};

  @media only screen and (max-width: 600px){
    padding: 20px 0;
  }
`;
