import React, { useState } from 'react'
import { X, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'

const QuickViewModal = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState(0)
  const { addToCart, addToWishlist, isInWishlist } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = () => {
    if (!selectedSize) {
      showToast('Please select a size', 'error')
      return
    }
    addToCart(product, selectedSize, selectedColor)
    showToast('Added to cart!', 'success')
    onClose()
  }

  const handleWishlist = () => {
    addToWishlist(product)
    if (isInWishlist(product.id)) {
      showToast('Removed from wishlist', 'info')
    } else {
      showToast('Added to wishlist!', 'success')
    }
  }

  if (!product) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-neutral-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center shadow-md hover:bg-neutral-100 dark:hover:bg-neutral-700"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Image */}
          <div className="aspect-[3/4] bg-neutral-100 dark:bg-neutral-800">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-2">{product.name}</h2>
            <p className="text-xl mb-4">${product.price}</p>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-neutral-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-neutral-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            )}
            
            <p className="text-neutral-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Color</p>
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === index ? 'border-neutral-900 scale-110' : 'border-neutral-300'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">Size</p>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 border text-sm font-medium transition-all ${
                      selectedSize === size 
                        ? 'border-neutral-900 bg-neutral-900 text-white' 
                        : 'border-neutral-300 hover:border-neutral-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-6">
              <Button 
                className="flex-1" 
                size="md"
                disabled={!selectedSize}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <button 
                onClick={handleWishlist}
                className={`w-12 h-12 border flex items-center justify-center transition-all ${
                  isInWishlist(product.id) 
                    ? 'border-red-500 bg-red-50 text-red-500' 
                    : 'border-neutral-300 hover:border-neutral-900'
                }`}
              >
                <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
              </button>
            </div>

            <Link 
              to={`/product/${product.id}`}
              className="text-sm font-medium hover:text-neutral-600 transition-colors block text-center"
              onClick={onClose}
            >
              View Full Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickViewModal
