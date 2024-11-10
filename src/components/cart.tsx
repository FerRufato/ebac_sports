import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store/store'
import { addToCart, removeFromCart, clearCart } from '../store/cartSlice'

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount)
  const dispatch = useDispatch<AppDispatch>()

  const handleAddToCart = () => {
    const newItem = { id: '1', name: 'Produto X', price: 100 }
    dispatch(addToCart(newItem))
  }

  const handleRemoveFromCart = (itemId: string) => {
    dispatch(removeFromCart(itemId))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div>
      <h2>Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price}
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: R${totalAmount.toFixed(2)}</h3>
          <button onClick={handleClearCart}>Limpar Carrinho</button>
        </>
      )}
      <button onClick={handleAddToCart}>Adicionar Produto</button>
    </div>
  )
}

export default Cart
