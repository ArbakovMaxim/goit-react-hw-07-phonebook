import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { combineReducers, createSlice } from '@reduxjs/toolkit';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://630274209eb72a839d6fec89.mockapi.io',
    tagTypes: ['Contact'],
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts/contacts`,
      providesTags: ['Contact'],
    }),
    createContacts: builder.mutation({
      query: newContacts => ({
        url: `/contacts/contacts`,
        method: 'POST',
        body: {
          name: newContacts.name,
          phone: newContacts.phone,
        },
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContacts: builder.mutation({
      query: contactsId => ({
        url: `/contacts/contacts/${contactsId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
} = contactsApi;

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

export const { changeFilter } = contactsSlice.actions;

// Selectors

export const getFilter = state => state.filterContacts.filter;

// combineReducers

const combiReducer = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export default combiReducer;
