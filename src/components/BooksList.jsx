import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BooksList = ({ books }) => (
  <ul>
    {[...books].map((book) => (
      <BookItem book={book} key={book.id} />
    ))}
  </ul>
);
export default BooksList;

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
