import React, { useState, useRef, useEffect } from 'react';
import '../css/main.css';

function NavBar() {
  // TODO: change element color based on scroll position
  // float contact-button right

  const [headerTextColor, setHeaderTextColor] = useState('white');
  const navRef = useRef(null); // ref to #nav

  const listenToScrollEvent = () => {
    window.scrollY > navRef.current.height ? setHeaderTextColor('#282c34') : setHeaderTextColor('white');
    console.log(navRef.current.height);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScrollEvent);
  });

  return (
    <div>
      <ul id="nav" ref={navRef} style={{ color: headerTextColor }}>
        <li>
          <a href="/about" style={{ color: headerTextColor }}>
            About
          </a>
        </li>
        <li>
          <a href="/projects" style={{ color: headerTextColor }}>
            Projects
          </a>
        </li>
        <li>
          <a href="/contact" style={{ color: headerTextColor }}>
            Contact Me
          </a>
        </li>
        <li>
          <button id="contact-button">Contact Us</button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
