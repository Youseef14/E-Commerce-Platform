import React from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import Button from '../components/Button'

const Wishlist = () => {
  const { wishlistItems, addToWishlist, addToCart } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = (product) => {
    addToCart(product, product.sizes[0], 0)
    showToast('Product added to cart!', 'success')
  }

  const handleRemove = (product) => {
    addToWishlist(product)
    showToast('Removed from wishlist', 'info')
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Your Wishlist is Empty</h2>
        <p className="text-neutral-600 mb-8">Save your favorite items for later</p>
        <Link to="/shop">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-2">My Wishlist</h1>
          <p className="text-neutral-600">{wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {wishlistItems.map((product) => (
            <div key={product.id} className="group relative">
              <button
                onClick={() => handleRemove(product)}
                className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-neutral-100 transition-colors"
              >
                <X size={16} />
              </button>
              
              <Link to={`/product/${product.id}`}>
                <div className="aspect-[3/4] bg-neutral-100 mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              
              <div className="space-y-3">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-sm font-medium group-hover:text-neutral-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-neutral-600">${product.price}</p>
                <Button 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wishlist
