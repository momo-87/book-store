import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BooksList from 'components/BooksList';

const BooksLogics = () => {
  const [books, setBooks] = useState([{
    id: uuidv4(), category: 'Action', title: 'The Hunter Games', author: 'Suzanne Collins', progress: '64%', currentChapter: '17',
  }]);

  const handleDelete = (id) => {
    setBooks([...books.filter((book) => book.id !== id)]);
  };

  return (
    <div>
      <BooksList delBook={handleDelete} books={books} />
    </div>
  );
};
export default BooksLogics;
