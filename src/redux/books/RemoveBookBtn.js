import { useDispatch } from 'react-redux';
import { removeBook } from 'redux/books/bookSlice';

const RemoveBookBtn = (id) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => dispatch(removeBook(id));
  return (
    <button
      onClick={handleRemoveBook}
      type="button"
    >
      Add Book
    </button>
  );
};
export default RemoveBookBtn;
