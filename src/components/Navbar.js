import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Navbar = () => (
  <nav className="navbar">
    <h1> BookStore </h1>

    <div className="links">
      <ul>
        <li>
          <Link to="/" className="books">BOOKS</Link>
        </li>
        <li>
          <Link to="/Category" className="categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
