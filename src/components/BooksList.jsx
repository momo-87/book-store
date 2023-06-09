import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BooksList = ({ books, delBook }) => (
  <ul>
    {[...books].map((book) => (
      <BookItem book={book} delBook={delBook} key={book.id} />
    ))}
  </ul>
);
export default BooksList;

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  delBook: PropTypes.func.isRequired,
};
