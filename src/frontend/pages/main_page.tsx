import NavBar from '../components/nav_bar';
import HeaderTyping from '../components/header_typing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import '../css/main.css';

function Main() {
  return (
    <div className='App'>
      <Router>
        <div>
          <NavBar showingHeader={true} />
        </div>
        <Routes>
          <Route path='/clients' element={<Test />}></Route>
          <Route path='/about' element={<Test />}></Route>
          <Route path='/team' element={<Test />}></Route>
        </Routes>
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

function Test() {
  return (
    <div>
      <p style={{ color: 'white', backgroundColor: 'red' }}>test</p>
    </div>
  );
}
