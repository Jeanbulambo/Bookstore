import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Books = (prop) => {
  const {
    title, chapter, category, id, completed, author,
  } = prop;

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="displaying-container">
      <span className="setdisplaying">
        <span className="strong">Book Title : </span>
        {category}
      </span>
      <span className="Book">{title}</span>
      <span className="Author-name">
        <span className="strong">Author Name : </span>
        {author}
      </span>
      <div className="books-buttons">
        <button className="Comments" type="button">Comments</button>
        <button classN ame="Remove" onClick={removeHandler} type="button">Remove</button>
        <button className="Edit" type="button">Edit</button>
      </div>
      <div>
        <span>{completed}</span>
      </div>
      <div>
        <span className="Current-Chapter">Current Chapter</span>
        <span>{chapter}</span>
        <button className="Update-progress" type="button">Update progress</button>
      </div>
    </div>
  );
};

export default Books;
