import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactsSlice';
import { filtersReducer } from '../redux/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
