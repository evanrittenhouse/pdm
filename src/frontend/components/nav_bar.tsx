import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/main.css';

interface NavBarType {
  showingHeader: boolean;
}

interface NavButtonType {
  navLocation: string;
  buttonColor?: string;
}

export default function NavBar({ showingHeader = true }: NavBarType) {
  // TODO: make contact button work, routes won't render for some reason
  // float contact-button right
  const [headerTextColor, setHeaderTextColor] = useState('white');

  useEffect(() => {
    const headerTextColorTemp = showingHeader ? 'white' : 'black';
    setHeaderTextColor(headerTextColorTemp);
  }, [showingHeader]);

  return (
    <div id="App-header">
      <ul id="nav" style={{ color: headerTextColor }} className="container-fluid">
        <li>
          <Link to="/" id="button-a-copy">
            PDM
          </Link>
        </li>
        <li>
          <Link to="/clients" style={{ color: headerTextColor }}>
            Clients
          </Link>
        </li>
        <li>
          <NavButton navLocation={'/about'} />
        </li>
        <li>
          <Link to="/team" style={{ color: headerTextColor }}>
            Team
          </Link>
        </li>
      </ul>
    </div>
  );
}

function NavButton({ navLocation, buttonColor = 'white' }: NavButtonType) {
  const navigate = useNavigate();

  function handleClick(): void {
    navigate(navLocation);
  }

  return (
    <button onClick={handleClick} className="navButton" style={{ color: buttonColor }}>
      Contact Us
    </button>
  );
}
