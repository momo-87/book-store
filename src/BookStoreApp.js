import { Routes, Route } from 'react-router-dom';
import Books from 'routes/Books';
import Categories from 'routes/Categories';

function BookStoreApp() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  );
}
export default BookStoreApp;
