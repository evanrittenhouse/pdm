import NavBar from './components/nav_bar';
import ClientsPage from './pages/clients_page';
import TeamPage from './pages/team_page';
import HomePage from './pages/home_page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clients" element={<ClientsPage />}></Route>
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
