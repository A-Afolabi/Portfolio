import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import logo from './assets/logo.png'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const SiteNavBar = () => (
  <Navbar expand="md" bg="dark" sticky="top">
    <Container>
      <Navbar.Brand>
        <Link to="/"><img src={logo} alt=""></img></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Link to="#AboutMe">About Me</Link>
        <Link to="#Interests">Interests</Link>
        <Link to="#Skills">Skills</Link>
        <Link to="#Projects">Projects</Link>
        <Link to="#Experience">Experience</Link>
        <Link to="#Contact">Contact</Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
export default SiteNavBar