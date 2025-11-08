import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import ProductGallery from '../components/ProductGallery'
import ProductReviews from '../components/ProductReviews'
import { products } from '../data/products'
import { Heart, Truck, RefreshCw } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { useRecentlyViewed } from '../context/RecentlyViewedContext'

const ProductDetails = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addToCart, addToWishlist, isInWishlist } = useCart()
  const { showToast } = useToast()
  const { addToRecentlyViewed } = useRecentlyViewed()

  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product)
    }
  }, [product, addToRecentlyViewed])

  const handleAddToCart = () => {
    if (!selectedSize) {
      showToast('Please select a size', 'error')
      return
    }
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize, selectedColor)
    }
    showToast('Added to cart!', 'success')
  }

  const handleWishlist = () => {
    addToWishlist(product)
    if (isInWishlist(product.id)) {
      showToast('Removed from wishlist', 'info')
    } else {
      showToast('Added to wishlist!', 'success')
    }
  }

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/shop" className="text-sm font-medium hover:text-neutral-600">
          Continue Shopping →
        </Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm mb-8">
          <Link to="/" className="text-neutral-600 hover:text-neutral-900">Home</Link>
          <span className="text-neutral-400">/</span>
          <Link to="/shop" className="text-neutral-600 hover:text-neutral-900">Shop</Link>
          <span className="text-neutral-400">/</span>
          <span className="text-neutral-900">{product.name}</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <ProductGallery images={product.images || [product.image]} productName={product.name} />

          {/* Details */}
          <div className="lg:pl-8">
            <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4">{product.name}</h1>
            <p className="text-2xl mb-6">${product.price}</p>
            
            <p className="text-neutral-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Color</p>
              <div className="flex space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === index ? 'border-neutral-900' : 'border-neutral-300'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-medium">Size</p>
                <button className="text-sm text-neutral-600 hover:text-neutral-900">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border text-sm font-medium transition-all ${
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

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-medium mb-3">Quantity</p>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-neutral-300 hover:border-neutral-900 transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-neutral-300 hover:border-neutral-900 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4 mb-8">
              <Button 
                className="flex-1" 
                size="lg"
                disabled={!selectedSize}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <button 
                onClick={handleWishlist}
                className={`w-14 h-14 border flex items-center justify-center transition-all ${
                  isInWishlist(product.id) 
                    ? 'border-red-500 bg-red-50 text-red-500' 
                    : 'border-neutral-300 hover:border-neutral-900'
                }`}
              >
                <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-8 border-t border-neutral-200">
              <div className="flex items-center space-x-3">
                <Truck size={20} className="text-neutral-600" />
                <div>
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-neutral-600">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RefreshCw size={20} className="text-neutral-600" />
                <div>
                  <p className="text-sm font-medium">Easy Returns</p>
                  <p className="text-xs text-neutral-600">30-day return policy</p>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider">Product Details</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {product.details}
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <ProductReviews 
          productId={product.id} 
          rating={product.rating} 
          reviewCount={product.reviewCount} 
        />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-serif font-bold mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
