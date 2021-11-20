import NavBar from '../components/nav_bar';
import ClientsPage from '../components/clients_page';
import TeamPage from '../components/team';
import HeaderTyping from '../components/header_typing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import '../css/main.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar showingHeader={true} />
        <div>
          <Routes>
            <Route path="/" element={<HeaderTyping string={'<b>Pacific Data Management, Inc.</b>Move your data forward.'} />} />
            <Route path="/clients" element={<ClientsPage />}></Route>
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
