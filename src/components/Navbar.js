import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => (
  <div className="navbar">
    <nav className="nava-links">
      <Link to="/" className="links1">books</Link>
      <Link to="/Categories" className="links2">Categories</Link>
    </nav>
  </div>
);

export default Nav;
