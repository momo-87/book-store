import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const addNewApp = createAsyncThunk('books/addNewAPP', async (rejectWithValue) => {
//   try {
//     const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/');
//     console.log(response.data);
//     return response;
//   } catch (err) {
//     return rejectWithValue('Failed to create a new app');
//   }
// });

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (appId = 'sMkThm8S72y7VovqTFP8', { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    return rejectWithValue('Failed to fetch books data !!');
  }
});

export const addNewBook = createAsyncThunk('books/addNewbook', async (book = {
  item_id: 'item3',
  title: 'The Selfish Gene',
  author: 'Richard Dawkins',
  category: 'Nonfiction',
}) => {
  try {
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sMkThm8S72y7VovqTFP8/books', book);
    return response.json();
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  bookItems: [
    // {
    //   item_id: 'item1',
    //   title: 'The Great Gatsby',
    //   author: 'John Smith',
    //   category: 'Fiction',
    // },
    // {
    //   item_id: 'item2',
    //   title: 'Anna Karenina',
    //   author: 'Leo Tolstoy',
    //   category: 'Fiction',
    // },
    // {
    //   item_id: 'item3',
    //   title: 'The Selfish Gene',
    //   author: 'Richard Dawkins',
    //   category: 'Nonfiction',
    // }
  ],
  isLoading: true,
  error: undefined,
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
      .addCase(addNewBook.fulfilled, (action) => {
        console.log(action.paylod);
      });
  },
});

export const { addBook, removeBook } = BookSlice.actions;
export default BookSlice.reducer;
