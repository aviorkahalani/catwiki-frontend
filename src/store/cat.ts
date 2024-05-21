import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { CatBreed } from '../types'

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/api/cat' }),
  endpoints: (builder) => ({
    fetchCatBreeds: builder.query<CatBreed[], void>({
      query: () => '',
    }),
  }),
})

export const { useFetchCatBreedsQuery } = catApi
