import { booksActions } from './Books';

export const fetchBooksData = () => async (dispatch) => {
  const fetchData = async () => {
    const response = await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3muWpKUESGqUvQa4emVv/books',
    );
    const data = await response.json();
    return data;
  };
  try {
    const data = await fetchData();
    dispatch(booksActions.replaceBook(data));
  } catch (error) {
    throw new Error('error');
  }
};

export const sendBooksData = (book) => async () => {
  const sendData = async () => {
    await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3muWpKUESGqUvQa4emVv/books',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: book.id,
          title: book.title,
          author: book.author,
          category: book.category,
        }),
      },
    );
  };
  try {
    await sendData();
  } catch (error) {
    throw new Error('error');
  }
};

export const deleteBookData = (id) => async () => {
  const deleteData = async () => {
    await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3muWpKUESGqUvQa4emVv/books/${id}`,
      {
        method: 'DELETE',
      },
    );
  };
  try {
    await deleteData();
  } catch (error) {
    throw new Error('error');
  }
};
