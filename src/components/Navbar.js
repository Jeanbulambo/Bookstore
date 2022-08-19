import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Navbar = () => (
  <div className="navbar">
    <nav className="nava-links">
      <Link to="/" className="links1">Books</Link>
      <Link to="/Category" className="links2">Category</Link>
    </nav>
  </div>
);

export default Navbar;
