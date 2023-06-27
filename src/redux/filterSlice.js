import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatusFilter: (state, action) => (state = action.payload),
  },
});
export const { setStatusFilter } = filterSlice.actions;

export const getContactFilter = state => state.filter;
