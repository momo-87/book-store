import { useDispatch } from 'react-redux';
import { addBook } from 'redux/books/bookSlice';

const AddBookBtn = (id, title, author) => {
  const dispatch = useDispatch();
  const handleAddBook = () => dispatch(addBook(id, title, author));
  return (
    <button
      onClick={handleAddBook}
      type="button"
    >
      Add Book
    </button>
  );
};
export default AddBookBtn;
