import PropTypes from 'prop-types';
/* eslint-disable react/prop-types */

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="wrapper-book">
      <li>
        <h3>{title}</h3>
        <p>{author}</p>
      </li>
    </div>
  );
};

Book.protoTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
