export const ADD_BOOK = 'bookstore/Books/ADD-BOOK';
export const REMOVE_BOOK = 'bookstore/Books/REMOVE_BOOK';

export const RemoveActions = (bid) => (
  {
    type: ADD_BOOK,
    id: bid,
  }
);

export const AddAction = (bid, btitle, bauthor) => ({

  type: REMOVE_BOOK,
  id: bid,
  title: btitle,
  author: bauthor,
}
);

const initializationState = [];
const booksReducer = (state = initializationState, action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    case ADD_BOOK:
      return [...state, { id: action.id, title: action.title, author: action.author }];
    default:
      return state;
  }
};

export default booksReducer;
