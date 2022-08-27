import { Link } from 'react-router-dom';
import userimage from '../assets/userimage.png';

const Navbar = () => (
  <nav className="navbar">
    <h1> BookStore CMS</h1>
    <div className="links">
      <Link to="/" className="books">BOOKS</Link>
      <Link to="/Category" className="categories">CATEGORIES</Link>
    </div>
    <div className="user">
      <img className="user--img" src={userimage} alt="user login" />
    </div>
  </nav>
);

export default Navbar;
