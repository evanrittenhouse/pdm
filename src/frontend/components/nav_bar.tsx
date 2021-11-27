import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ContactUsContainer from '../components/contact_us_button';
import '../css/main.css';

export default function NavBar() {
  // TODO: get navbar button to show if the user is on mobile
  const [state, setState] = useState<boolean>(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    let position: string = location.pathname === '/' ? 'fixed' : 'sticky';
    navRef.current.position = position;
    console.log(position);
  });

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => setState(!state);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => console.log('clicked');

  return (
    <Navbar bg='dark' variant='dark' expand='lg' fixed='top' ref={navRef}>
      <Container>
        <Navbar.Brand href='/'>Pacific Data Management</Navbar.Brand>
        <Nav.Link className='nav-link-element' href='/clients' onMouseEnter={handleMouseEvent}>
          Clients
        </Nav.Link>
        <Nav.Link className='nav-link-element' href='/team'>
          {state ? 'Team' : 'Placeholder'}
        </Nav.Link>
        <Nav.Link className='nav-link-element' href='/services'>
          Services
        </Nav.Link>
        <ContactUsContainer />
      </Container>
    </Navbar>
  );
}
