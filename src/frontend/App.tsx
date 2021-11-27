import NavBar from './components/nav_bar';
import ClientsPage from './pages/clients_page';
import TeamPage from './pages/team_page';
import HomePage from './pages/home_page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './App.css';
import './css/main.css';

function App() {
  // TODO: implement paddingTop to be the height of the navBar - currently a placeholder of 20px
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div style={{ paddingTop: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clients" element={<ClientsPage />}></Route>
            <Route path="/team" element={<TeamPage />} />
            <Route path="/services" element={<ClientsPage />}></Route>
            <Route path="/careers" element={<TeamPage />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
