import { Routes, Route } from 'react-router-dom';
import Books from 'routes/Books';
import Categories from 'routes/Categories';
import Layout from 'routes/Layout';

function BookStoreApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}
export default BookStoreApp;
