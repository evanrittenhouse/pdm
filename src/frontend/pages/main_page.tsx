import NavBar from '../components/nav_bar';
import MainPageHeader from '../components/header/main_page_header';
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
      <MainPageHeader />
      <img src={logo} className="App-logo" alt="logo" />
      <p>Test</p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" id="content">
        Learn React
      </a>
    </div>
  );
}

export default Main;
