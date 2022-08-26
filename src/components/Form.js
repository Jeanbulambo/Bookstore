import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksActions } from '../redux/Books/Books';
import { sendBooksData } from '../redux/Books/Actions';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('action');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (title.length > 2 && author.length > 2) {
      const newBook = {
        id: Math.random().toString(),
        title,
        author,
        category,
      };
      dispatch(sendBooksData(newBook));
      const key = newBook.id;
      const obj = {};
      obj[key] = [newBook];
      dispatch(booksActions.addBook(obj));
      setTitle('');
      setAuthor('');
      setCategory('action');
    }
  };

  return (
    <div className="AddBook">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Book title"
          onChange={titleHandler}
          value={title}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={authorHandler}
          value={author}
        />
        <select
          value={category}
          onChange={categoryHandler}
          className="select-category"
        >
          <option value="fiction">Life</option>
          <option value="technology">Programming</option>
          <option value="action">Select Category</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default AddBook;
