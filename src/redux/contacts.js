import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: '',
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },
    deleteContact(state, actions) {
      state.items = state.items.filter(({ id }) => id !== actions.payload);
    },
    changeFilter(state, actions) {
      state.filter = actions.payload;
    },
  },
});

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
