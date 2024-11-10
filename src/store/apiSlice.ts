import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Product {
  id: string
  name: string
  price: number
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products'
    })
  })
})

export const { useGetProductsQuery } = apiSlice
