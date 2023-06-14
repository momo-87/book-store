// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BooksList = () => {
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
