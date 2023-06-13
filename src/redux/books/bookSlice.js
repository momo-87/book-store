import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => (
      [...state, action.payload]
    ),
  },
});

export const { addBook } = BookSlice.actions;
export default BookSlice.reducer;
