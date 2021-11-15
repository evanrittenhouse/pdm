import React, { useState, useEffect } from 'react';
import '../css/main.css';

interface NavBarType {
  showingHeader: boolean;
}

function NavBar({ showingHeader = true }: NavBarType) {
  // TODO: add header ref
  // float contact-button right
  const [headerTextColor, setHeaderTextColor] = useState('white');

  useEffect(() => {
    let headerTextColorTemp = showingHeader ? 'white' : 'black';
    setHeaderTextColor(headerTextColorTemp);
  }, [showingHeader]);

  return (
    <div>
      <ul id="nav" style={{ color: headerTextColor }} className="container-fluid">
        <li>
          <button id="button-a-copy">PDM</button>
        </li>
        <li>
          <a href="/about" style={{ color: headerTextColor }}>
            About
          </a>
        </li>
        <li>
          <a href="/clients" style={{ color: headerTextColor }}>
            Clients
          </a>
        </li>
        <li>
          <a href="/team" style={{ color: headerTextColor }}>
            Team
          </a>
        </li>
        <li>
          <a href="/contact" style={{ color: headerTextColor }} className="ms-auto">
            <button id="contact-button">Contact Us</button>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
