import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'filterContacts',
  initialState: {
    filter: '',
  },

  reducers: {
    changeFilter(state, actions) {
      state.filter = actions.payload;
    },
  },
});

export const getFilter = state => state.contactsSlice.filter;

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
