// src/components/ProductList.tsx
import React from 'react'
import { useGetProductsQuery } from '../store/apiSlice'

const ProductList = () => {
  const { data, error, isLoading } = useGetProductsQuery()

  if (isLoading) return <p>Carregando produtos...</p>
  if (error) return <p>Erro ao carregar produtos!</p>

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
