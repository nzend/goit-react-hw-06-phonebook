import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 0, name: 'Margo', number: 55555555 },
  { id: 1, name: 'Vlad', number: 55555555 },
  { id: 2, name: 'Tiku', number: 55555555 },
  { id: 3, name: 'Redux', number: 55555555 },
  { id: 4, name: 'Opps', number: 55555555 },
];

const tasksSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = tasksSlice.actions;
export const contactsReducer = tasksSlice.reducer;
