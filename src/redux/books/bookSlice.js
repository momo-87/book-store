import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [{
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  }],
};

const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      if (action.payload.title !== '' && action.payload.author !== '') {
        state.bookItems.push(action.payload);
      }
    },
    removeBook: (state, action) => {
      state.bookItems = state.bookItems.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = BookSlice.actions;
export default BookSlice.reducer;
