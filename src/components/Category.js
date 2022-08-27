import { useSelector, useDispatch } from 'react-redux/es/exports';
import { CheckStatus } from '../redux/categories/categories';

const Category = () => {
  const response = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(CheckStatus())}>Check status</button>
      <h1>{response}</h1>
    </div>
  );
};
export default Category;
