import React, { Component } from 'react';
import {
  Route,
  Routes,
  Link
}from "react-router-dom";
import HomePage from './pages/HomePage';
import LostArkClass from './pages/LostArkClass';
import ConfigBot from './pages/ConfigBot';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class App extends Component{
  render() {
    return (
      <div>
        <Navbar expand="lg" bg="dark" variant='dark'>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <NavDropdown title="Raid-Class" id='collasible-nav-dropdown'>
                  <NavDropdown.Item href='/class/demonic'>Demoniste</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1>Simple SPA</h1>
        <div className="content overflow-visible">
        <Routes>
          <Route path="/"  element={<HomePage />}></Route>
          <Route path="/class/demonic" element={<LostArkClass />}></Route>
          <Route path="/discord-bot" element={<ConfigBot />}></Route>
        </Routes>
        </div>
      </div>

    );
  }
}


export default App;
