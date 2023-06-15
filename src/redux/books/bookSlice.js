import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (appId = 'sMkThm8S72y7VovqTFP8', { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    return rejectWithValue('Failed to fetch books data !!');
  }
});

export const addBook = createAsyncThunk('books/addNewbook', async (book, { rejectWithValue }) => {
  try {
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sMkThm8S72y7VovqTFP8/books', book);
    return response.json();
  } catch (error) {
    return rejectWithValue('Failed to add new book');
  }
});

const initialState = {
  bookItems: [],
  isLoading: true,
  error: undefined,
};

const BookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      state.bookItems = state.bookItems.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        // Get the action.payload keys values (item1 item2 item3,...)
        //  which actually represent the books id)
        const booksId = Object.keys(action.payload);
        // Create bookItem object with the corresponding item_id
        const books = [];
        booksId.forEach((elt) => {
          const bookItem = {
            item_id: elt,
            title: action.payload[elt][0].title,
            author: action.payload[elt][0].author,
            category: action.payload[elt][0].category,
          };
          books.push(bookItem);
        });
        state.bookItems = books;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { removeBook } = BookSlice.actions;
export default BookSlice.reducer;
