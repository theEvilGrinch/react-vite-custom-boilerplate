import { toggleTheme } from '../../utils/theme.js';

function Header() {
  return (
    <header>
      <h1>React + Vite Custom Boilerplate</h1>
      <nav aria-label="Main navigation">
        <ul>
          <li><a href="" aria-current="page">Home</a></li>
          <li><a href="#">Section 1</a></li>
          <li><a href="#">Section 2</a></li>
          <li><a href="#">Section 3</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <button data-toggle-theme="" aria-label="Toggle color theme" onClick={toggleTheme}>Change theme</button>

      <p>
        This is the text content of header. It contains information about various topics and provides insights into
        different subjects. The article is well-structured and easy to read, making it accessible to a wide audience.
      </p>
    </header>
  );
} 

export default Header;