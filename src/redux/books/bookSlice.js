import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => (
      [...state].filter((book) => book.id !== action.payload.id)
    ),
  },
});

export const { addBook, removeBook } = BookSlice.actions;
export default BookSlice.reducer;
