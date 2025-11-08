import React from 'react'
import { Link } from 'react-router-dom'
import { X, Star } from 'lucide-react'
import { useComparison } from '../context/ComparisonContext'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import Button from '../components/Button'

const Comparison = () => {
  const { comparisonItems, removeFromComparison, clearComparison } = useComparison()
  const { addToCart } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = (product) => {
    addToCart(product, product.sizes[0], 0)
    showToast('Added to cart!', 'success')
  }

  if (comparisonItems.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">No Products to Compare</h2>
        <p className="text-neutral-600 mb-8">Add products to compare their features</p>
        <Link to="/shop">
          <Button>Browse Products</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold">Compare Products</h1>
          <Button variant="outline" onClick={clearComparison} size="sm">
            Clear All
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left p-4 w-48">Feature</th>
                {comparisonItems.map((product) => (
                  <th key={product.id} className="p-4 min-w-64">
                    <div className="relative">
                      <button
                        onClick={() => removeFromComparison(product.id)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-neutral-900 text-white rounded-full flex items-center justify-center hover:bg-neutral-800"
                      >
                        <X size={14} />
                      </button>
                      <Link to={`/product/${product.id}`}>
                        <div className="aspect-[3/4] bg-neutral-100 mb-4">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-semibold text-center mb-2">{product.name}</h3>
                      </Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-200">
                <td className="p-4 font-medium">Price</td>
                {comparisonItems.map((product) => (
                  <td key={product.id} className="p-4 text-center">
                    <span className="text-xl font-bold">${product.price}</span>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-neutral-200 bg-neutral-50">
                <td className="p-4 font-medium">Rating</td>
                {comparisonItems.map((product) => (
                  <td key={product.id} className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(product.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-neutral-300'}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-neutral-600">
                        {product.rating} ({product.reviewCount})
                      </span>
                    </div>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-neutral-200">
                <td className="p-4 font-medium">Category</td>
                {comparisonItems.map((product) => (
                  <td key={product.id} className="p-4 text-center capitalize">
                    {product.category}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-neutral-200 bg-neutral-50">
                <td className="p-4 font-medium">Available Colors</td>
                {comparisonItems.map((product) => (
                  <td key={product.id} className="p-4">
                    <div className="flex justify-center gap-2">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full border border-neutral-300"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-neutral-200">
                <td className="p-4 font-medium">Available Sizes</td>
                {comparisonItems.map((product) => (
                  <td key={product.id} className="p-4 text-center text-sm">
                    {product.sizes.join(', ')}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-neutral-200 bg-neutral-50">
                <td className="p-4 font-medium">Description</td>
                {comparisonItems.map((product) => (
                  <td key={product.id} className="p-4 text-sm text-neutral-600">
                    {product.description}
                  </td>
                ))}
              </tr>

              <tr className="border-b border-neutral-200">
                <td className="p-4 font-medium">Availability</td>
                {comparisonItems.map((product) => (
                  <td key={product.id} className="p-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-medium">Action</td>
                {comparisonItems.map((product) => (
                  <td key={product.id} className="p-4 text-center">
                    <Button 
                      className="w-full"
                      disabled={!product.inStock}
                      onClick={() => handleAddToCart(product)}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Comparison
