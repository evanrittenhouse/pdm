import NavBar from '../components/nav_bar';
import MainPageHeader from '../components/header/main_page_header';
import logo from '../logo.svg';
import '../App.css';
import '../css/main.css';

function Main() {
  return (
    <div className="App">
      <MainPageHeader />
      <NavBar />
      <img src={logo} className="App-logo" alt="logo" />
      <p>Test</p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default Main;
