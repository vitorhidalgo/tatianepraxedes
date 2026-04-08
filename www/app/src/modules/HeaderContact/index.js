import React from 'react';
import { FaInstagram } from "react-icons/fa";

import { Container } from './styles';
import { Icon } from '../../components/icon';

import { colors } from '../../styles/variables';


export default function HeaderContact() {
  return (
      <Container>
        <div className="content">
            <a href="https://www.instagram.com/tatianepraxedes_psi/" target='_blank' rel="noopener noreferrer"><FaInstagram size={18} color={colors.white.hexa} />&nbsp; Instagram</a>
            <span>|</span>
            <a href="tel:+5511996518884">
                <Icon name={"FaPhone"} size={14} color={colors.white.hexa} /> 
                (11) 99651-8884
            </a>
            <span>|</span>
            <a href="mailto:tatiane.sandroni@gmail.com" target="_blank" rel="noopener noreferrer">
                <Icon name={"FaEnvelope"} size={14} color={colors.white.hexa} /> 
                tatiane.sandroni@gmail.com
            </a>
        </div>
      </Container>
  );
}
