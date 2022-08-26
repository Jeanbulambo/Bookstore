// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ImSpinner8 } from 'react-icons/im';
import { deleteBookData } from '../redux/Books/Actions';
import { booksActions } from '../redux/Books/Books';

const Book = ({
  id, title, author, category, index, chapter,
}) => {
  const dispatch = useDispatch();

  const removeHandler = (e) => {
    dispatch(deleteBookData(e.target.id));
    dispatch(booksActions.removeBook(e.target.id));
  };
  return (
    <div>
      <div>
        <div>{category}</div>
        <h3 className="title">{title}</h3>
        <div className="author">{author}</div>
        <div>
          <button type="button">Comments</button>
          <button id={id} type="button" onClick={removeHandler}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <div>
          <ImSpinner8 />
          {index}
          {' '}
          %
        </div>
        <p>Completed</p>
      </div>
      <div>
        <h5>CURRENT CHAPTER</h5>
        <h3>
          Chapter-
          {chapter}
        </h3>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
};

export default Book;
