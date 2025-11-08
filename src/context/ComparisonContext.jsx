import React, { createContext, useContext, useState, useEffect } from 'react'

const ComparisonContext = createContext()

export const useComparison = () => {
  const context = useContext(ComparisonContext)
  if (!context) {
    throw new Error('useComparison must be used within ComparisonProvider')
  }
  return context
}

export const ComparisonProvider = ({ children }) => {
  const [comparisonItems, setComparisonItems] = useState(() => {
    const saved = localStorage.getItem('comparison')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('comparison', JSON.stringify(comparisonItems))
  }, [comparisonItems])

  const addToComparison = (product) => {
    if (comparisonItems.length >= 4) {
      return { success: false, message: 'Maximum 4 products can be compared' }
    }
    if (comparisonItems.find(item => item.id === product.id)) {
      return { success: false, message: 'Product already in comparison' }
    }
    setComparisonItems(prev => [...prev, product])
    return { success: true, message: 'Added to comparison' }
  }

  const removeFromComparison = (productId) => {
    setComparisonItems(prev => prev.filter(item => item.id !== productId))
  }

  const clearComparison = () => {
    setComparisonItems([])
  }

  const isInComparison = (productId) => {
    return comparisonItems.some(item => item.id === productId)
  }

  return (
    <ComparisonContext.Provider value={{ 
      comparisonItems, 
      addToComparison, 
      removeFromComparison, 
      clearComparison,
      isInComparison
    }}>
      {children}
    </ComparisonContext.Provider>
  )
}
