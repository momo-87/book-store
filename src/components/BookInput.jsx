import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from 'redux/books/bookSlice';

const BookInput = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleAuthor = (e) => (setAuthor(e.target.value));
  const handleTitle = (e) => (setTitle(e.target.value));

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
    }
  };

  return (
    <form>
      <span>ADD NEW BOOK</span>
      <input type="text" placeholder="Book title" onChange={handleTitle} />
      <input type="text" placeholder="Author" onChange={handleAuthor} />
      <button type="button" onClick={handleAddBtn}>ADD BOOK</button>
    </form>
  );
};

export default BookInput;
