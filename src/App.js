import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Book from './components/Books';
import Category from './components/Category';

const App = () => {
  const book = [
    {
      id: '1',
      title: 'The Hunter',
      author: ' Jean',
    },
    {
      id: '2',
      title: 'The Hunter',
      author: 'Jean',
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Book items={book} />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </div>
  );
};

export default App;
