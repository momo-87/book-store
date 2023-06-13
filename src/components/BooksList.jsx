import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BooksList = ({ books }) => (
  <ul>
    {[...books].map((book) => (
      <BookItem book={book} key={book.item_id} />
    ))}
  </ul>
);
export default BooksList;

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
