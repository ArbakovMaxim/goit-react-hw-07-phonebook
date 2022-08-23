import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
        body: newContacts,
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
