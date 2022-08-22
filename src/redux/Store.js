import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/Books';
import CategoryReducer from './category/category';

const store = configureStore({
  reducer: {
    Books: booksReducer,
    category: CategoryReducer,
  },
});

export default store;
