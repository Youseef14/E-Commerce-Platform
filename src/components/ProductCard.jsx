import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, GitCompare } from 'lucide-react'
import QuickViewModal from './QuickViewModal'
import { useComparison } from '../context/ComparisonContext'
import { useToast } from '../context/ToastContext'

const ProductCard = ({ product, className = '' }) => {
  const [showQuickView, setShowQuickView] = useState(false)
  const { addToComparison, isInComparison } = useComparison()
  const { showToast } = useToast()

  const handleCompare = (e) => {
    e.preventDefault()
    const result = addToComparison(product)
    showToast(result.message, result.success ? 'success' : 'error')
  }

  const handleQuickView = (e) => {
    e.preventDefault()
    setShowQuickView(true)
  }

  return (
    <>
      <div className={`group relative block ${className}`}>
        <Link to={`/product/${product.id}`}>
          <div className="aspect-[3/4] bg-neutral-100 dark:bg-neutral-800 mb-4 overflow-hidden relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Hover Overlay with Actions */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button
                onClick={handleQuickView}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors"
                title="Quick View"
              >
                <Eye size={18} />
              </button>
              <button
                onClick={handleCompare}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isInComparison(product.id)
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white hover:bg-neutral-100'
                }`}
                title="Compare"
              >
                <GitCompare size={18} />
              </button>
            </div>

            {/* Stock Badge */}
            {!product.inStock && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Out of Stock
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium group-hover:text-neutral-600 transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-sm text-neutral-600">
                ${product.price}
              </p>
              {product.rating && (
                <div className="flex items-center text-xs text-neutral-500">
                  <span className="text-yellow-500 mr-1">★</span>
                  {product.rating}
                </div>
              )}
            </div>
            {product.colors && (
              <div className="flex space-x-2">
                {product.colors.slice(0, 4).map((color, index) => (
                  <div 
                    key={index}
                    className="w-4 h-4 rounded-full border border-neutral-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>
        </Link>
      </div>

      {showQuickView && (
        <QuickViewModal 
          product={product} 
          onClose={() => setShowQuickView(false)} 
        />
      )}
    </>
  )
}

export default ProductCard
