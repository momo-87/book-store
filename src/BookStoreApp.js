import { Routes, Route } from 'react-router-dom';
import Books from 'routes/Books';
import Categories from 'routes/Categories';
import Layout from 'routes/Layout';
import styles from 'styles/BookStoreApp.module.css';

const BookStoreApp = () => (
  <div className={styles.appWrapper}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  </div>
);
export default BookStoreApp;
