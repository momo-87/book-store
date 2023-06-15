import BooksList from 'components/BooksList';
import BookInput from 'components/BookInput';
import 'styles/bookListAndInput.scss';

const Home = () => (
  <div className="bookList-bookInput-box">
    <BooksList />
    <BookInput />
  </div>
);
export default Home;
