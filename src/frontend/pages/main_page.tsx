import NavBar, { ClientsPage } from '../components/nav_bar';
import HeaderTyping from '../components/header_typing';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../App.css';
import '../css/main.css';

function Main() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar showingHeader={true} />
        </div>
        <div>
          <header className="App-header">
            <HeaderTyping string={'<b>Pacific Data Management, Inc.</b>\nMove your data forward.'} />
          </header>
        </div>
        <Routes>
          <Route path="/clients" element={<ClientsPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
