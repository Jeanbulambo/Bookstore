import '../styles/category.css';

const Category = () => (
  <div className="category">
    <div className="category-header">
      <select>
        <option value="category" className="selected">Category</option>
        <option value="action" className="selected">Action</option>
      </select>
    </div>
    <button type="button">Check status</button>
  </div>
);

export default Category;
