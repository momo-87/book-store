import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    statut: () => {
      'Under Construction';
    },
  },
});

export const { status } = categoriesSlice.actions;
export default categoriesSlice.reducer;
