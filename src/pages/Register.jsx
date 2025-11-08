import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    alert('Registration functionality would be implemented here')
  }

  return (
    <div className="py-12 lg:py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Create Account</h1>
            <p className="text-neutral-600">Join our community of conscious consumers</p>
          </div>

          {/* Register Form */}
          <div className="bg-white border border-neutral-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                  required
                />
              </div>
              
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" required />
                <label className="text-sm text-neutral-600">
                  I agree to the{' '}
                  <a href="#" className="text-neutral-900 hover:text-neutral-600">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-neutral-900 hover:text-neutral-600">Privacy Policy</a>
                </label>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Create Account
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-neutral-600">Or sign up with</span>
              </div>
            </div>

            {/* Social Sign Up */}
            <div className="space-y-3">
              <button className="w-full px-4 py-3 border border-neutral-300 hover:border-neutral-900 text-sm font-medium transition-colors">
                Sign up with Google
              </button>
              <button className="w-full px-4 py-3 border border-neutral-300 hover:border-neutral-900 text-sm font-medium transition-colors">
                Sign up with Facebook
              </button>
            </div>
          </div>

          {/* Login Link */}
          <p className="text-center mt-6 text-sm text-neutral-600">
            Already have an account?{' '}
            <Link to="/login" className="text-neutral-900 font-medium hover:text-neutral-600">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
