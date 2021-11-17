import NavBar from '../components/nav_bar';
import HeaderTyping from '../components/header/header_typing';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import '../css/main.css';

function Main() {
  return (
    <div className='App'>
      <Router>
        <NavBar showingHeader={true} />
      </Router>
      <div>
        <header className='App-header'>
          <HeaderTyping string={'<b>Pacific Data Management, Inc.</b>\nMove your data forward.'} />
        </header>
      </div>
    </div>
  );
}

export default Main;
