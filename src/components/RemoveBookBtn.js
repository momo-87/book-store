import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from 'redux/books/bookSlice';

const RemoveBookBtn = ({ id }) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => dispatch(removeBook(id));
  return (
    <button
      onClick={handleRemoveBook}
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
