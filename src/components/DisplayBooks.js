import React from 'react';
import AddBook from './Form';
import ListOfBooks from './BooksList';

const Books = () => (
  <>
    <div className="display-Books">
      <ListOfBooks />
      <h2>ADD NEW BOOK</h2>
      <AddBook />
    </div>
  </>
);

export default Books;
