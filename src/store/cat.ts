import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { CatBreed } from '../types'

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/api/cat' }),
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
