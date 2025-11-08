import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Login functionality would be implemented here')
  }

  return (
    <div className="py-12 lg:py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Welcome Back</h1>
            <p className="text-neutral-600">Sign in to your account</p>
          </div>

          {/* Login Form */}
          <div className="bg-white border border-neutral-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
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
              
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-neutral-600">Remember me</span>
                </label>
                <a href="#" className="text-neutral-900 hover:text-neutral-600">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Sign In
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-neutral-600">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full px-4 py-3 border border-neutral-300 hover:border-neutral-900 text-sm font-medium transition-colors">
                Continue with Google
              </button>
              <button className="w-full px-4 py-3 border border-neutral-300 hover:border-neutral-900 text-sm font-medium transition-colors">
                Continue with Facebook
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-sm text-neutral-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-neutral-900 font-medium hover:text-neutral-600">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
