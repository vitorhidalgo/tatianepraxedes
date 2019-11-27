import React, { Component } from 'react';

import HeaderContact from '../src/modules/HeaderContact';
import ModuleLogo from '../src/modules/Logo';
import Services from '../src/modules/Services';
import About from '../src/modules/About';
import Phrase from '../src/modules/Phrase';
import Contact from '../src/modules/Contact';
import ModuleFooter from '../src/modules/Footer';

import { GlobalStyle } from './styles/global';

export default class App extends Component {
  render() {
    return (
        <>
          {/* <HeaderContact />
          <ModuleLogo />
          <Services />
          <About />
          <Phrase /> */}
          <Contact />
          {/* <ModuleLogo inverted={true} />
          <ModuleFooter /> */}
          <GlobalStyle />
        </>
    );
  }
}
