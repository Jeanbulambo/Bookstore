import { Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Category';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </>

  );
}

export default App;
