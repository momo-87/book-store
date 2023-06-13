import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => (
      [
        ...state,
        payload,
      ]
    ),
  },
});

export default BookSlice.reducer;
