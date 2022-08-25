export const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatus = () => (
  {
    type: CHECK_STATUS,
  }
);
const initState = [];
const CategoryReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'under construction';
    default: return state;
  }
};

export default CategoryReducer;
