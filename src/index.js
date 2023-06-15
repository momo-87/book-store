import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BookStoreApp from 'BookStoreApp';
import { Provider } from 'react-redux';
import store from 'redux/store';
// import { addBook } from 'redux/books/bookSlice';

// store.dispatch(addBook());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BookStoreApp />
      </Router>
    </Provider>
  </React.StrictMode>,
);
