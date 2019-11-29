import styled from 'styled-components';

import { Form, Input } from '@rocketseat/unform';

import { colors } from '../../styles/variables';
import { Button } from '../../styles/global';

export const Container = styled.div`
  padding: 50px 0;
  background-color: ${colors.white.hexa};

  @media only screen and (max-width: 600px){
    padding: 20px 0;
  }
`;

export const FForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  textarea.textarea{
    width: 100%;
    height: 200px;
    border: 1px solid ${colors.gray.hexa};
    padding: 0 15px;
    line-height: 45px;
    font-size: 14px;
  }
`;

export const Label = styled.label`
  width: 33.33333%;
  position: relative;
  padding: 0 5px 10px 5px;
`;

export const LabelFull = styled(Label)`
  width: 100%;
`;

export const FInput = styled(Input)`
  width: 100%;
  height: 45px;
  border: 1px solid ${colors.gray.hexa};
  padding: 0 15px;
  line-height: 45px;
  font-size: 14px;
`;