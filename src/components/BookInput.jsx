import PropTypes from 'prop-types';

const BookInput = ({ handleTitle, handleAuthor, handleAddBtn }) => (
  <form>
    <span>ADD NEW BOOK</span>
    <input type="text" placeholder="Book title" onChange={handleTitle} />
    <input type="text" placeholder="Author" onChange={handleAuthor} />
    <button type="button" onClick={handleAddBtn}>ADD BOOK</button>
  </form>
);
export default BookInput;

BookInput.propTypes = {
  handleTitle: PropTypes.func.isRequired,
  handleAuthor: PropTypes.func.isRequired,
  handleAddBtn: PropTypes.func.isRequired,
};
