import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from 'redux/books/bookSlice';

const RemoveBookBtn = ({ id }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = (bookId) => () => {
    dispatch(deleteBook(bookId));
  };
  return (
    <button
      onClick={handleRemoveBook(id)}
      type="button"
    >
      remove
    </button>
  );
};
export default RemoveBookBtn;

RemoveBookBtn.propTypes = {
  id: PropTypes.string.isRequired,
};
