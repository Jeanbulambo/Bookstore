import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { getBooksThunk, removeBookThunk } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksThunk());
  }, []);
  // eslint-disable-next-line func-names
  return (books.map((book) => (
    <div key={book.id} className="card">
      <div className="book--info">
        <span>{book.category}</span>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <ul className="book--utils">
          <button
            className="book--utils--button"
            type="button"
          >
            Comment
          </button>
          <button
            className="left--right book--utils--button"
            id={book.id}
            type="button"
            onClick={
              (event) => {
                event.preventDefault();
                dispatch(removeBookThunk(event.target.id));
              }
            }
          >
            Remove
          </button>
          <button
            className="book--utils--button book--utils--button"
            type="button"
          >
            Edit
          </button>
        </ul>
      </div>
      <div className="progress">
        <div className="oval" />
        <CircularProgressbar className="loader" value={Math.floor(Math.random() * 100)} text={`${Math.floor(Math.random() * 100)}%`} />
      </div>
      <div className="chapter">
        <h4>CURRENT CHAPTER</h4>
        <h5>Chapter 02</h5>
        <button className="chapter--button" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  )));
};

export default Book;
