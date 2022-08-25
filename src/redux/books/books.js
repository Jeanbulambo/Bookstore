import { v4 as rid } from 'uuid';

const ADD_BOOK = 'bookstore/Books/ADD-BOOK';
const REMOVE_BOOK = 'bookstore/Books/REMOVE_BOOK';

const initialState = [
  { id: rid(), title: 'the hidden language of computer hardware and software', author: 'Charles Petzold' },
  { id: rid(), title: ' Cracking the Coding Interview', author: 'Gayle Laakmann McDowell' },
  { id: rid(), title: 'A Practical Handbook of Software Construction', author: 'Steve McConnell' },
  { id: rid(), title: 'Programming Pearls', author: 'Jon Bentley' },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.id);

    default:
      return state;
  }
};

export default booksReducer;
