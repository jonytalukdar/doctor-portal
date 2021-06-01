import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="#home">Doctor-Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Services
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Reviews
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Blog
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
