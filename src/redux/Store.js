import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import CategoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: CategoryReducer,
  },
});

export default store;
