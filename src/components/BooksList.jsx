// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import 'styles/bookListAndInput.scss';
import { useEffect } from 'react';
import { fetchBooks } from 'redux/books/bookSlice';
import BookItem from './BookItem';

const BooksList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const { bookItems, isLoading, error } = useSelector((state) => state.books);
  return (
    <ul className="books-list">
      { isLoading ? <p>Loading...</p> : undefined }
      {error ? <p>{error}</p> : undefined}
      {bookItems.map((book) => (
        <BookItem key={book.item_id} book={book} />
      ))}
    </ul>
  );
};

export default BooksList;

// BooksList.propTypes = {
//   books: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
// };
