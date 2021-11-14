import '../css/main.css';

function NavBar() {
  return (
    <div>
      <ul id="nav">
        <li>
          <a href="/about"> About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
