import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Navbar = () => (
  <nav className="navbar">
    <h1> BookStore CMS</h1>
    <div className="links">
      <Link to="/" className="books">BOOKS</Link>
      <Link to="/Category" className="categories">CATEGORIES</Link>
    </div>
  </nav>
);

export default Navbar;
