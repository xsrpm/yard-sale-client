import { useState } from 'react'

export function useInitialState() {
  const initialState = {
    cart: {
      items: [],
      open: false
    }
  }
  const [state, setState] = useState(initialState)

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
  const totalCartPrice = () => {
    return state.cart.items.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
  }
  const productInCart = (productId) => {
    const cartItems = state.cart.items
    const item = cartItems.find((item) => item.id === productId)
    return item ? true : false
  }

  return {
    state,
    addToCart,
    removeFromCart,
    toggleCart,
    productInCart,
    totalCartPrice
  }
}
