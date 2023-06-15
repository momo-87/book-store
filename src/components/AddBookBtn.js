import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from 'redux/books/bookSlice';
import { useEffect } from 'react';

const AddBookBtn = (newId, newTitle, newAuthor) => {
  const dispatch = useDispatch();
  const newBookData = {
    item_id: newId,
    title: newTitle,
    author: newAuthor,
  };
  const newBook = {
    item_id: newBookData.item_id.newId,
    title: newBookData.item_id.newTitle,
    author: newBookData.item_id.newAuthor,
    category: 'Action',
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleButtonClick = (Book) => () => {
    if (Book.item_id && Book.title && Book.author) {
      dispatch(addBook(Book));
    }
  };
  return (
    <button
      onClick={handleButtonClick(newBook)}
      type="button"
    >
      Add Book
    </button>
  );
};
export default AddBookBtn;
