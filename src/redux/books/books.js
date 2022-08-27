import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const appId = 'WXf8E4ksRmJYSE3pAQqQ';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

const REMOVE_BOOK = 'bookstore-with-react/books/REMOVE_BOOK';
const ADD_BOOK = 'bookstore-with-react/books/ADD_BOOK';
const GET_BOOKS = 'bookstore-with-react/books/GET_BOOKS';

export const getBooksThunk = createAsyncThunk(GET_BOOKS, async () => {
  const response = await axios.get(`${baseUrl}/${appId}/books`);
  const res = response.data;
  return Object.keys(res).map((key) => ({
    id: key,
    ...res[key][0],
  }));
});

export const addBookThunk = createAsyncThunk(
  ADD_BOOK,
  async (
    singleBook,
    thunkAPI,
  ) => {
    const book = {
      item_id: uuidv4(),
      title: singleBook.title,
      author: singleBook.author,
      category: singleBook.category,
    };
    await axios.post(`${baseUrl}/${appId}/books/`, book)
      .then(() => { thunkAPI.dispatch(getBooksThunk()); })
      // eslint-disable-next-line no-console
      .catch((error) => { console.log(error); });
    return thunkAPI.getState().books;
  },
);

export const removeBookThunk = createAsyncThunk(REMOVE_BOOK, async (bookId, thunkAPI) => {
  await axios.delete(`${baseUrl}/${appId}/books/${bookId}`)
    .then(() => { thunkAPI.dispatch(getBooksThunk()); })
    // eslint-disable-next-line no-console
    .catch((error) => { console.log(error); });
  return thunkAPI.getState().books;
});

const storeSlice = createSlice((
  {
    name: 'bookstore-with-react/books',
    initialState: [],
    extraReducers: {
      [getBooksThunk.fulfilled]: (state, action) => action.payload,
      [addBookThunk.fulfilled]: (state, action) => action.payload,
    },
  }
));

export default storeSlice.reducer;
