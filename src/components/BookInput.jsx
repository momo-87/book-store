// import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddBookBtn from 'components/AddBookBtn';

const BookInput = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  return (
    <form>
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
      <AddBookBtn item_id={id} title={title} author={author} />
    </form>
  );
};
export default BookInput;
