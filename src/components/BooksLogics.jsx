import { useState } from 'react';
import BooksList from 'components/BooksList';
import BookInput from 'components/BookInput';
import bookItems from 'redux/books/bookItems';
import 'styles/bookListAndInput.scss';

const BooksLogics = () => {
  const [books, setBooks] = useState(bookItems);

  const handleDelete = (id) => {
    setBooks([...books.filter((book) => book.id !== id)]);
  };

  return (
    <div className="bookList-bookInput-box">
      <BooksList delBook={handleDelete} books={books} />
      <BookInput />
    </div>
  );
};
export default BooksLogics;
