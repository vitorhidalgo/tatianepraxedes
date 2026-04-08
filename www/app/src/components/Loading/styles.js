import styled, { keyframes } from 'styled-components';

import { colors } from '../../styles/variables';

const spin = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Container = styled.div`
    width: 50px;
    height: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    border-radius: 50%;
    background-color: ${colors.white.hexa};
    border-top: 3px solid ${colors.darkRed.hexa};
    border-right: 3px solid ${colors.darkRed.hexa};
    border-bottom: 3px solid ${colors.lightGray.hexa};
    border-left: 3px solid ${colors.lightGray.hexa};
    animation: ${spin} 0.8s linear infinite;
`;
