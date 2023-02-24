import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import logo from './components/assets/logo.png'

import SiteNavBar from './components/SiteNavBar';
import AboutMe from './components/AboutMe';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <SiteNavBar />
        <header>
          <img src={logo} alt="🧑🏾‍💻" />
          <div className="home-text">
            <h1 className="ayo anim-typewriter display-2 text-center">Ayo Afolabi</h1>
            <h2 className="sd anim-typewriter display-6 text-center">Software Developer</h2>
          </div>
        </header>
        <div className="container">
          <AboutMe />
          <br />
          <Interests />
          <br />
          <Skills />
          <br />
          <Projects />
          <br />
          <Experience />
          <br />
          <Contact />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
