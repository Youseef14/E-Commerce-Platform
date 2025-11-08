import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart()

  const subtotal = cartTotal
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Your cart is empty</h2>
        <p className="text-neutral-600 mb-8">Start shopping to add items to your cart</p>
        <Link to="/shop">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div key={index} className="flex gap-6 pb-6 border-b border-neutral-200">
                  {/* Image */}
                  <div className="w-32 h-40 bg-neutral-100 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <Link to={`/product/${item.id}`} className="font-medium hover:text-neutral-600">
                        {item.name}
                      </Link>
                      <button 
                        onClick={() => removeFromCart(index)}
                        className="text-neutral-400 hover:text-neutral-900"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    <p className="text-sm text-neutral-600 mb-4">
                      Size: {item.size}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="w-8 h-8 border border-neutral-300 hover:border-neutral-900 flex items-center justify-center transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="w-8 h-8 border border-neutral-300 hover:border-neutral-900 flex items-center justify-center transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-medium">${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/shop" className="inline-block mt-8 text-sm font-medium hover:text-neutral-600">
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-beige p-6 lg:p-8 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-green-700">
                    🎉 You got free shipping!
                  </p>
                )}
                {subtotal < 100 && (
                  <p className="text-xs text-neutral-600">
                    Add ${(100 - subtotal).toFixed(2)} more to get free shipping
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-neutral-300 mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Link to="/checkout" className="block w-full">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>

              <p className="text-xs text-neutral-600 mt-4 text-center">
                Taxes calculated at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
