import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBookBtn from 'components/AddBookBtn';
import { useSelector } from 'react-redux';

const BookInput = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const error = useSelector((state) => state.books.error);
  return (
    <form>
      {error ? <p>{error}</p> : undefined}
      <span className="form-title">ADD NEW BOOK</span>
      <div className="inputs-container">
        <input
          className="book-title"
          type="text"
          placeholder="Book title"
          onChange={(e) => {
            setTitle(e.target.value.trim());
            setId(uuidv4());
          }}
        />
        <input
          className="book-author"
          type="text"
          placeholder="Author"
          onChange={(e) => {
            setAuthor(e.target.value.trim());
            setId(uuidv4());
          }}
        />
        <AddBookBtn newId={id} newTitle={title} newAuthor={author} />
      </div>
    </form>
  );
};
export default BookInput;
