// import PropTypes from 'prop-types';

const BookInput = () => (
  <form>
    <span>ADD NEW BOOK</span>
    <input type="text" placeholder="Book title" />
    <input type="text" placeholder="Author" />
    <button type="button">ADD BOOK</button>
  </form>
);
export default BookInput;

// BookInput.propTypes = {
//   handleTitle: PropTypes.func.isRequired,
//   handleAuthor: PropTypes.func.isRequired,
//   handleAddBtn: PropTypes.func.isRequired,
// };
