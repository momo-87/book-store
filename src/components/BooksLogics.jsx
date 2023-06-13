import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BooksList from 'components/BooksList';
import BookInput from 'components/BookInput';
import bookItems from 'redux/books/bookItems';
import { addBook } from 'redux/books/bookSlice';
import 'styles/bookListAndInput.scss';
import { useSelector, useDispatch } from 'react-redux';

const BooksLogics = () => {
  // Get all books items (from Redux store and hard coded booksItems.js file)
  const storedBooks = useSelector((state) => state.books);
  const [books, setBooks] = useState([...storedBooks, ...bookItems]);
  // Handle delete books
  const handleDelete = (id) => {
    setBooks([...books.filter((book) => book.id !== id)]);
  };
  // Get authon name and book title from inputs
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleAuthor = (e) => (setAuthor(e.target.value));
  const handleTitle = (e) => (setTitle(e.target.value));
  // Handle add book
  const handleAddBtn = () => {
    const bookTitle = title.trim();
    const bookAuthor = author.trim();
    if (bookTitle && bookAuthor) {
      const newBook = {
        id: uuidv4(),
        title: bookTitle,
        author: bookAuthor,
      };
      dispatch(addBook(newBook));
      setBooks([...books, newBook]);
    }
  };

  return (
    <div className="bookList-bookInput-box">
      <BooksList delBook={handleDelete} books={books} />
      <BookInput
        handleAuthor={handleAuthor}
        handleTitle={handleTitle}
        handleAddBtn={handleAddBtn}
      />
    </div>
  );
};
export default BooksLogics;
