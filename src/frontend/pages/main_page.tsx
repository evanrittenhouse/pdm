import NavBar from '../components/nav_bar';
import HeaderTyping from '../components/header/header_typing';
import logo from '../logo.svg';
import '../App.css';
import '../css/main.css';
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
        <a id='clients'>Clients</a>
      </div>
    </div>
  );
}

export default Main;
