// import PropTypes from 'prop-types';
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
      <span>ADD NEW BOOK</span>
      <input
        type="text"
        placeholder="Book title"
        onChange={(e) => {
          setTitle(e.target.value.trim());
          setId(uuidv4());
        }}
      />
      <input
        type="text"
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value.trim())}
      />
      <AddBookBtn newId={id} newTitle={title} newAuthor={author} />
    </form>
  );
};
export default BookInput;
