import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './phoneBookApi';
/* import { setupListeners } from '@reduxjs/toolkit/query'; */

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

/* setupListeners(store.dispatch); */
