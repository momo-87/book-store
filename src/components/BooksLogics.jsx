import BooksList from 'components/BooksList';
import BookInput from 'components/BookInput';
import 'styles/bookListAndInput.scss';
import { useSelector } from 'react-redux';

const BooksLogics = () => {
  const { bookItems } = useSelector((state) => state.books);
  return (
    <div className="bookList-bookInput-box">
      <BooksList books={bookItems} />
      <BookInput />
    </div>
  );
};
export default BooksLogics;
