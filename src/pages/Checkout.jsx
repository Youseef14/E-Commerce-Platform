import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { Lock, Check, Tag } from 'lucide-react'
import { promo_codes } from '../data/reviews'
import { useToast } from '../context/ToastContext'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const [step, setStep] = useState(1)
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)
  const { showToast } = useToast()
  const { cartTotal } = useCart()
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const orderTotal = cartTotal || 298.00
  
  const applyPromoCode = () => {
    const promo = promo_codes.find(p => p.code === promoCode.toUpperCase())
    if (!promo) {
      showToast('Invalid promo code', 'error')
      return
    }
    if (orderTotal < promo.minAmount) {
      showToast(`Minimum order amount is $${promo.minAmount}`, 'error')
      return
    }
    setAppliedPromo(promo)
    showToast(`Promo code applied! ${promo.description}`, 'success')
  }
  
  const discount = appliedPromo 
    ? appliedPromo.type === 'percentage' 
      ? (orderTotal * appliedPromo.discount / 100)
      : appliedPromo.discount
    : 0

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Order placed successfully!')
  }

  return (
    <div className="py-12 lg:py-16 bg-neutral-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-neutral-900 text-white' : 'bg-neutral-300 text-neutral-600'}`}>
                {step > 1 ? <Check size={16} /> : '1'}
              </div>
              <div className={`w-24 h-0.5 mx-2 ${step >= 2 ? 'bg-neutral-900' : 'bg-neutral-300'}`} />
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-neutral-900 text-white' : 'bg-neutral-300 text-neutral-600'}`}>
                {step > 2 ? <Check size={16} /> : '2'}
              </div>
              <div className={`w-24 h-0.5 mx-2 ${step >= 3 ? 'bg-neutral-900' : 'bg-neutral-300'}`} />
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-neutral-900 text-white' : 'bg-neutral-300 text-neutral-600'}`}>
                {step > 3 ? <Check size={16} /> : '3'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 lg:p-10">
                <h1 className="text-3xl font-serif font-bold mb-8">Checkout</h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                      required
                    />
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        required
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Address"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 mt-4"
                      required
                    />
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <input
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        required
                      />
                      <input
                        type="text"
                        placeholder="State"
                        value={formData.state}
                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                        className="px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        required
                      />
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        value={formData.zipCode}
                        onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                        className="px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        required
                      />
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
                    <div className="flex items-center text-sm text-neutral-600 mb-4">
                      <Lock size={16} className="mr-2" />
                      <span>Secure checkout</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Card number"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                      className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                        className="px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        required
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                        className="px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Place Order
                  </Button>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white p-6 lg:p-8 sticky top-24">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm"
                      disabled={!!appliedPromo}
                    />
                    {appliedPromo ? (
                      <button
                        onClick={() => {
                          setAppliedPromo(null)
                          setPromoCode('')
                        }}
                        className="px-4 py-2 text-sm border border-neutral-300 hover:border-neutral-900"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={applyPromoCode}
                        className="px-4 py-2 text-sm bg-neutral-900 text-white hover:bg-neutral-800"
                      >
                        Apply
                      </button>
                    )}
                  </div>
                  {appliedPromo && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-green-700">
                      <Tag size={14} />
                      <span>{appliedPromo.description}</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Subtotal</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-700">
                      <span>Discount ({appliedPromo.code})</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Shipping</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Tax</span>
                    <span>${((orderTotal - discount) * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 mb-6">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${((orderTotal - discount) * 1.08).toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-neutral-600">
                  <p>✓ Free shipping on orders over $100</p>
                  <p>✓ 30-day return policy</p>
                  <p>✓ Secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
