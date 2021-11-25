import React, { useState, useEffect, MouseEvent } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../css/main.css';

export default function NavBar() {
  // TODO: get navbar button to show if the user is on mobile
  const [state, setState] = useState<boolean>(false);

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => setState(!state);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">PDM</Navbar.Brand>
        <Nav.Link className="nav-link-element" href="/clients" onMouseEnter={handleMouseEvent}>
          Clients
        </Nav.Link>
        <Nav.Link className="nav-link-element" href="/team">
          {state ? 'Team' : 'Placeholder'}
        </Nav.Link>
        <Nav.Link className="nav-link-element" href="/services">
          Services
        </Nav.Link>
        <Nav.Link className="nav-link-element" href="/careers">
          Careers
        </Nav.Link>
        <Nav.Link className="ml-auto p-1 nav-link-element" href="/contact">
          Contact Us
        </Nav.Link>
      </Container>
    </Navbar>
  );
}
