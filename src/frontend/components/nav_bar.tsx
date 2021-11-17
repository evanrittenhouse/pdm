import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../css/main.css';

interface NavBarType {
  showingHeader: boolean;
}

interface LinkProps {
  pathName: string;
}

function NavBar({ showingHeader = true }: NavBarType) {
  // TODO: add header ref
  // float contact-button right
  const [headerTextColor, setHeaderTextColor] = useState('white');

  useEffect(() => {
    let headerTextColorTemp = showingHeader ? 'white' : 'black';
    setHeaderTextColor(headerTextColorTemp);
  }, [showingHeader]);

  return (
    <div>
      <ul id='nav' style={{ color: headerTextColor }} className='container-fluid'>
        <li>
          <button id='button-a-copy'>PDM</button>
        </li>
        <li>
          <Link to='/clients' style={{ color: headerTextColor }}>
            Clients
          </Link>
        </li>
        <li>
          <Link to='/about' style={{ color: headerTextColor }}>
            About
          </Link>
        </li>
        <li>
          <Link to='/team' style={{ color: headerTextColor }}>
            Team
          </Link>
        </li>
        <li>
          <Link to='/contact' style={{ color: headerTextColor }} className='ms-auto'>
            <button id='contact-button'>Contact Us</button>
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path='/clients' element={<Test />}></Route>
        <Route path='/about' element={<Test />}></Route>
        <Route path='/team' element={<Test />}></Route>
      </Routes>
    </div>
  );
}

export default NavBar;

function Test() {
  return (
    <div>
      <p style={{ color: 'white', backgroundColor: 'red' }}>test</p>
    </div>
  );
}
