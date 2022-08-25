import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };
  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      category: 'category',
      author,
      completed: 0,
      chapter: 0,
      id: uuidv4(),
    };
    e.target.reset();
    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input type="text" onChange={titleHandler} placeholder="Book title" required />
      <input type="text" onChange={authorHandler} placeholder="Book Author" required />
      <select disabled>
        <option value="category">Category</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
