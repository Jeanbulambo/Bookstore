import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar';
import Categories from './components/Category';
import Books from './components/DisplayBooks';
import './styles/style.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
