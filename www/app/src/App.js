import React, { Component } from 'react';

import HeaderContact from '../src/modules/HeaderContact';
import ModuleLogo from '../src/modules/Logo';
import Services from '../src/modules/Services';
import About from '../src/modules/About';
import Phrase from '../src/modules/Phrase';
import Contact from '../src/modules/Contact';
import ModuleFooter from '../src/modules/Footer';
import Whatsapp from '../src/components/Whatsapp';

import { GlobalStyle } from './styles/global';

export default class App extends Component {
  render() {
    return (
        <>
          <HeaderContact />
          <ModuleLogo />
          <Services />
          <About />
          <Phrase />
          <Contact />
          <ModuleLogo inverted={true} />
          <ModuleFooter />
          <Whatsapp
            phone="5511996518884"
            text="Ol%C3%A1%20Tatiane%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20seu%20trabalho."
            />
          <GlobalStyle />
        </>
    );
  }
}
