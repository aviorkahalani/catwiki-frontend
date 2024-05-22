import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { CatBreed } from '../types'

const BASE_URL =
  process.env.NODE_ENV !== 'development'
    ? '/api/cat'
    : '//localhost:3030/api/cat'

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchCatBreeds: builder.query<CatBreed[], void>({
      query: () => '',
    }),
    fetchCatBreedById: builder.query<CatBreed, string>({
      query: (id) => `/${id}`,
    }),
    fetchCatBreedImagesById: builder.query<string[], string>({
      query: (id) => `/images/${id}`,
    }),
  }),
})

export const {
  useFetchCatBreedsQuery,
  useFetchCatBreedByIdQuery,
  useFetchCatBreedImagesByIdQuery,
} = catApi
