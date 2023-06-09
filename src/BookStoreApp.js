import { Routes, Route } from 'react-router-dom';
import Home from 'routes/Home';
import Categories from 'routes/Categories';
import Layout from 'routes/Layout';
import styles from 'styles/BookStoreApp.module.css';

const BookStoreApp = () => (
  <div className={styles.appWrapper}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  </div>
);
export default BookStoreApp;
