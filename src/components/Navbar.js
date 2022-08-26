import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const Navbar = () => (
  <header>
    <div>
      <h1>BOOKS STORE</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">BOOKS</NavLink>
          </li>
          <li>
            <NavLink to="/categories">CATEGORIES</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
export default Navbar;
