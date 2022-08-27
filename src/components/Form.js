import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBookThunk } from '../redux/books/books';

const Form = () => {
  const [bookInfo, setBookInfo] = useState({ title: '', author: '', category: '' });
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.target.previousElementSibling.value = '';
    // eslint-disable-next-line no-param-reassign
    event.target.previousElementSibling.previousElementSibling.value = '';
    if (bookInfo.title && bookInfo.author && bookInfo.category) {
      dispatch(addBookThunk(bookInfo));
    } else {
      // eslint-disable-next-line no-alert
      alert('Please fill all fields');
    }
  };

  const handleChange = (event) => {
    setBookInfo({
      ...bookInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="form">
      <span>ADD NEW BOOK</span>
      <div className="inner--form">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          className="title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="author"
          onChange={handleChange}
        />
        <select value={bookInfo.category} onChange={handleChange} name="category" className="dropdown">
          <option value="History">History</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
        </select>

        <input
          type="submit"
          value="Submit"
          className="submit"
          onClick={handleClick}
        />
      </div>
    </form>
  );
};

export default Form;
