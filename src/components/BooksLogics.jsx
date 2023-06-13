// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import BooksList from 'components/BooksList';
import BookInput from 'components/BookInput';
// import { addBook } from 'redux/books/bookSlice';
import 'styles/bookListAndInput.scss';
import { useSelector } from 'react-redux';

const BooksLogics = () => {
  // const dispatch = useDispatch();
  // Get all books items (from Redux store and hard coded booksItems.js file)
  const { bookItems } = useSelector((state) => state.books);
  // const [books, setBooks] = useState([...bookItems]);

  // Get authon name and book title from inputs
  // const [author, setAuthor] = useState('');
  // const [title, setTitle] = useState('');
  // const handleAuthor = (e) => (setAuthor(e.target.value));
  // const handleTitle = (e) => (setTitle(e.target.value));
  // Handle add book
  // const handleAddBtn = () => {
  //   const bookTitle = title.trim();
  //   const bookAuthor = author.trim();
  //   if (bookTitle && bookAuthor) {
  //     const newBook = {
  //       id: uuidv4(),
  //       title: bookTitle,
  //       author: bookAuthor,
  //     };
  //     dispatch(addBook(newBook));
  //     setBooks([...books, newBook]);
  //   }
  // };

  return (
    <div className="bookList-bookInput-box">
      <BooksList books={bookItems} />
      <BookInput />
    </div>
  );
};
export default BooksLogics;
