const CHECK_STATUS = 'bookstore-with-react/categories/CHECK_STATUS';

export const CheckStatus = () => ({
  type: CHECK_STATUS,
  payload: 'under construction',
});

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;
