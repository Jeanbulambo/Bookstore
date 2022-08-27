import {
  BrowserRouter as Router, Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Category from './components/Category';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
