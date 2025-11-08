import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem('wishlist')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems))
  }, [wishlistItems])

  const addToCart = (product, size, color) => {
    setCartItems(prev => {
      const existing = prev.find(
        item => item.id === product.id && item.size === size && item.selectedColor === color
      )
      
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.size === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      
      return [...prev, { ...product, quantity: 1, size, selectedColor: color }]
    })
  }

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index))
  }

  const updateQuantity = (index, quantity) => {
    if (quantity < 1) return
    setCartItems(prev =>
      prev.map((item, i) => (i === index ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const addToWishlist = (product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id)
      if (exists) {
        return prev.filter(item => item.id !== product.id)
      }
      return [...prev, product]
    })
  }

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId)
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const value = {
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToWishlist,
    isInWishlist,
    cartTotal,
    cartCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
