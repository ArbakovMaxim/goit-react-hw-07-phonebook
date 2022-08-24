import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './phoneBookApi';
import contactsSlice from './filterContacts';

export const store = configureStore({
  reducer: {
    contactsSlice: contactsSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
