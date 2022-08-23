export const CHECK_STATUS = 'bookstore/category/CHECK-CAT';

export const checkStatus = () => (
  {
    type: CHECK_STATUS,
  }
);
const initState = [];
const CategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;
    default: return state;
  }
};

export default CategoryReducer;
