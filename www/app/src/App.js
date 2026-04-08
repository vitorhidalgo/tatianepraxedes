import React, { Component, lazy, Suspense } from 'react';

import Loading from "../src/components/Loading";

import { GlobalStyle } from './styles/global';

const HeaderContact = lazy(() => import('../src/modules/HeaderContact'));
const ModuleLogo = lazy(() => import('../src/modules/Logo'));
const Services = lazy(() => import('../src/modules/Services'));
const About = lazy(() => import('../src/modules/About'));
const Phrase = lazy(() => import('../src/modules/Phrase'));
const Contact = lazy(() => import('../src/modules/Contact'));
const ModuleFooter = lazy(() => import('../src/modules/Footer'));
const Whatsapp = lazy(() => import('../src/components/Whatsapp'));

export default class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <HeaderContact />
        <main>
          <ModuleLogo />
          <Services />
          <About />
          <Phrase />
          <Contact />
          <ModuleLogo inverted={true} />
        </main>
        <ModuleFooter />
        <Whatsapp
          phone="5511996518884"
          text="Ol%C3%A1%20Tatiane%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20seu%20trabalho."
          />
        <GlobalStyle />
      </Suspense>
    );
  }
}
