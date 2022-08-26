import { configureStore } from '@reduxjs/toolkit';
import books from './Books/Books';
import categories from './categories/Categories';

const store = configureStore({
  reducer: {
    books: books.reducer,
    categories: categories.reducer,
  },
});

export default store;
