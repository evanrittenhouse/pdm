// import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../css/main.css';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">PDM</Navbar.Brand>
        <Nav.Link className="nav-link-element" href="/clients">
          Clients
        </Nav.Link>
        <Nav.Link className="nav-link-element" href="/team">
          Team
        </Nav.Link>
        <Nav.Link className="ml-auto p-2 nav-link-element" href="/contact">
          Contact Us
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

// export function NavBar({ showingHeader = true }: NavBarType) {
//   // TODO: make contact button work, routes won't render for some reason
//   // float contact-button right
//   const [headerTextColor, setHeaderTextColor] = useState('white');

//   useEffect(() => {
//     const headerTextColorTemp = showingHeader ? 'white' : 'black';
//     setHeaderTextColor(headerTextColorTemp);
//   }, [showingHeader]);

//   return (
//     <div id="App-header">
//       <ul id="nav" style={{ color: headerTextColor }} className="container-fluid">
//         <li>
//           <Link to="/" id="button-a-copy">
//             PDM
//           </Link>
//         </li>
//         <li>
//           <Link to="/clients" style={{ color: headerTextColor }}>
//             Clients
//           </Link>
//         </li>
//         <li>
//           <NavButton navLocation={'/about'} buttonText="Contact Us" />
//         </li>
//         <li>
//           <Link to="/team" style={{ color: headerTextColor }}>
//             Team
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// interface NavButtonType {
//   navLocation: string;
//   buttonText: string;
//   buttonColor?: string;
// }

// function NavButton({ navLocation, buttonText, buttonColor = 'white' }: NavButtonType) {
//   const navigate = useNavigate();

//   function handleClick(): void {
//     navigate(navLocation);
//   }

//   return (
//     <button onClick={handleClick} className="navButton" style={{ color: buttonColor }}>
//       {buttonText}
//     </button>
//   );
// }
