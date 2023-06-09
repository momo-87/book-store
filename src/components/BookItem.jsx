import PropTypes from 'prop-types';

const BookItem = ({ book, delBook }) => (
  <li>
    <div className="left-div">
      <div>
        <span>{book.category}</span>
        <h3>{book.title}</h3>
        <span>{book.author}</span>
      </div>
      <div className="buttons-div">
        <button type="button">
          Comments
        </button>
        <button type="button" onClick={() => delBook(book.id)}>
          Remove
        </button>
        <button type="button">
          Edit
        </button>
      </div>
    </div>
    <div className="progress-div">
      <div className="diagram-box">
        empty
      </div>
      <div className="progress-status">
        <span>{book.progress}</span>
        <span>Completed</span>
      </div>
    </div>
    <div className="current-chapter">
      <span>CURRENT CHAPTER</span>
      <span>
        CHAPTER
        {book.currentChapter}
      </span>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </li>
);
export default BookItem;

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    progress: PropTypes.string,
    currentChapter: PropTypes.string,
  }).isRequired,
  delBook: PropTypes.func.isRequired,
};