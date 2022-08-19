import Book from './Book';
import Form from './Form';
/* eslint-disable react/prop-types */

const Books = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((data) => (
        <Book key={data.id} title={data.title} author={data.author} />

      ))}
      <Form />
    </ul>
  );
};

export default Books;
