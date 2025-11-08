import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, User, Menu, X, Heart, Moon, Sun, GitCompare } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useDarkMode } from '../context/DarkModeContext'
import { useComparison } from '../context/ComparisonContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const { cartCount, wishlistItems } = useCart()
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const { comparisonItems } = useComparison()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-neutral-900 dark:bg-neutral-800 text-white text-center py-2 px-4">
        <p className="text-sm font-light">Free shipping on orders over $100</p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
            EVERLANE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/shop" className="text-sm font-medium hover:text-neutral-600 transition-colors">
              Shop
            </Link>
            <Link to="/shop?category=women" className="text-sm font-medium hover:text-neutral-600 transition-colors">
              Women
            </Link>
            <Link to="/shop?category=men" className="text-sm font-medium hover:text-neutral-600 transition-colors">
              Men
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-neutral-600 transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:text-neutral-600 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-neutral-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:text-neutral-600 transition-colors"
            >
              <Search size={20} />
            </button>
            <button 
              onClick={toggleDarkMode}
              className="p-2 hover:text-neutral-600 transition-colors hidden sm:block"
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/comparison" className="p-2 hover:text-neutral-600 transition-colors relative hidden sm:block">
              <GitCompare size={20} />
              {comparisonItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-neutral-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {comparisonItems.length}
                </span>
              )}
            </Link>
            <Link to="/login" className="hidden sm:block p-2 hover:text-neutral-600 transition-colors">
              <User size={20} />
            </Link>
            <Link to="/wishlist" className="p-2 hover:text-neutral-600 transition-colors relative">
              <Heart size={20} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-neutral-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="p-2 hover:text-neutral-600 transition-colors relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-neutral-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-neutral-200">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-4 py-2 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                autoFocus
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/shop" 
                className="text-sm font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/shop?category=women" 
                className="text-sm font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link 
                to="/shop?category=men" 
                className="text-sm font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="text-sm font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-sm font-medium hover:text-neutral-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
