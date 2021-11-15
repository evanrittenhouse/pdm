import NavBar from '../components/nav_bar';
import HeaderTyping from '../components/header/header_typing';
import logo from '../logo.svg';
import '../App.css';
import '../css/main.css';
import Typed from 'typed.js';
import React, { useState, useRef } from 'react';

function Main() {
  const [showingHeader, setShowingHeader] = useState(true);
  const headerRef = useRef(null);

  return (
    <div className="App">
      <NavBar showingHeader={true} />
      <div>
        <header className="App-header">
          <HeaderTyping string={'<b>Pacific Data Management, Inc.</b>\nMove your data forward.'} />
        </header>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Test</p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" id="content">
        Learn React
      </a>
    </div>
  );
}

export default Main;
