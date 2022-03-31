import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export function useInitialState() {
  const initialState = {
    cart: {
      items: [],
      open: false
    },
    orders: []
  }
  const [state, setState] = useLocalStorage('appState', initialState)

  const addToCart = (product) => {
    const cartItems = state.cart.items
    const item = cartItems.find((item) => item.id === product.id)
    if (item) {
      item.quantity += 1
    } else {
      cartItems.push({ ...product, quantity: 1 })
    }
    setState({
      ...state,
      cart: {
        open: state.cart.open,
        items: [...cartItems]
      }
    })
  }
  const removeFromCart = (productId) => {
    const cartItems = state.cart.items
    const item = cartItems.find((item) => item.id === productId)
    if (item) {
      item.quantity -= 1
      if (item.quantity === 0) {
        const index = cartItems.indexOf(item)
        cartItems.splice(index, 1)
      }
    }
    setState({
      ...state,
      cart: {
        open: state.cart.open,
        items: [...cartItems]
      }
    })
  }
  const toggleCart = () => {
    setState({
      ...state,
      cart: {
        ...state.cart,
        open: !state.cart.open
      }
    })
  }

  const clearCart = () => {
    setState({
      ...state,
      cart: {
        items: [],
        open: false
      }
    })
  }

  const totalPrice = (items) => {
    return items.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
  }
  const productInCart = (productId) => {
    const cartItems = state.cart.items
    const item = cartItems.find((item) => item.id === productId)
    return item ? true : false
  }

  const newOrder = (items) => {
    const order = {
      id: Date.now(),
      items: [...items]
    }
    setState({
      ...state,
      orders: [...state.orders, order],
      cart: {
        items: [],
        open: false
      }
    })
  }

  const lastOrder = () => {
    return state.orders[state.orders.length - 1] || null
  }

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    toggleCart,
    productInCart,
    totalPrice,
    newOrder,
    lastOrder
  }
}
