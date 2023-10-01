import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/users',
    }),
  }),
})
export const { useGetUsersQuery } = apiSlice


