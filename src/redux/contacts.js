import { createSlice } from '@reduxjs/toolkit';
import contactsDefault from '../mock/data.json';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { LS_Key } from 'Constants/storageConstants';

const initialState = {
  items: contactsDefault,
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

const persistConfig = {
  key: LS_Key,
  storage,
  blacklist: ['filter'],
};

export const persisteContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
