// src/store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: string
  name: string
  price: number
}

interface CartState {
  items: CartItem[]
  totalAmount: number
}

const initialState: CartState = {
  items: [],
  totalAmount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload
      state.items.push(newItem)
      state.totalAmount += newItem.price
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload
      const itemIndex = state.items.findIndex((item) => item.id === itemId)
      if (itemIndex !== -1) {
        const item = state.items[itemIndex]
        state.totalAmount -= item.price
        state.items.splice(itemIndex, 1)
      }
    },
    clearCart: (state) => {
      state.items = []
      state.totalAmount = 0
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
