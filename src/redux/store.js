import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './phoneBookApi';
import combiReducer from './phoneBookApi';

export const store = configureStore({
  reducer: combiReducer,

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
