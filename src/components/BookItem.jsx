import PropTypes from 'prop-types';
import RemoveBookBtn from 'components/RemoveBookBtn';

const BookItem = ({ book }) => (
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
        <RemoveBookBtn id={book.item_id} />
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
      <span className="title">CURRENT CHAPTER</span>
      <span className="data">
        CHAPTER
        {book.currentChapter}
      </span>
      <button type="button" className="update-progress">UPDATE PROGRESS</button>
    </div>
  </li>
);
export default BookItem;

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    progress: PropTypes.string,
    currentChapter: PropTypes.string,
  }).isRequired,
};
