import React, { useEffect, useRef } from 'react';
import Nav from '../components/nav/nav';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Proyects from '../pages/proyects/proyects';
import Contact from '../pages/contact/contact';
import Skills from '../pages/skills/skills';

function Routes() {

  return (
    <>
      <Nav />
      <Home />
      <About />
      <Proyects />
      <Skills />
      <Contact />
    </>
  );
}

export default Routes;