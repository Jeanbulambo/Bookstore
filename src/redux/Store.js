import { combineReducers } from 'redux';
import booksReducer from './Books/Books';
import CategoryReducer from './category/category';

export default combineReducers({
  booksReducer,
  CategoryReducer,
});
