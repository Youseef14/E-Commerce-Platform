import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import FilterSidebar from '../components/FilterSidebar'
import { products } from '../data/products'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    category: [],
    priceRange: null,
    colors: [],
    sizes: [],
    minRating: 0
  })

  useEffect(() => {
    const category = searchParams.get('category') || 'all'
    setSelectedCategory(category)
  }, [searchParams])

  useEffect(() => {
    let filtered = [...products]

    // Filter by search
    const searchQuery = searchParams.get('search')
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by advanced filters
    if (filters.category.length > 0) {
      filtered = filtered.filter(p => filters.category.includes(p.category))
    }

    // Filter by price range
    if (filters.priceRange) {
      filtered = filtered.filter(p => 
        p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
      )
    }

    // Filter by colors
    if (filters.colors.length > 0) {
      filtered = filtered.filter(p => 
        p.colors.some(color => filters.colors.includes(color))
      )
    }

    // Filter by sizes
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(p => 
        p.sizes.some(size => filters.sizes.includes(size))
      )
    }

    // Filter by rating
    if (filters.minRating > 0) {
      filtered = filtered.filter(p => p.rating >= filters.minRating)
    }

    // Filter by category (from URL)
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    // Filter by gender
    if (selectedGender !== 'all') {
      filtered = filtered.filter(p => p.gender === selectedGender || p.gender === 'unisex')
    }

    // Sort
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, selectedGender, sortBy, searchParams, filters])

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Shop All</h1>
          <p className="text-neutral-600">Timeless pieces designed to last</p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>

          <div className="flex-1">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-neutral-300 hover:border-neutral-900 mb-6 w-full justify-center"
            >
              <SlidersHorizontal size={18} />
              <span>Filters</span>
            </button>

            {/* Mobile Filter Sidebar */}
            {showFilters && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
                <div className="absolute right-0 top-0 bottom-0 w-80 bg-white">
                  <FilterSidebar filters={filters} setFilters={setFilters} onClose={() => setShowFilters(false)} />
                </div>
              </div>
            )}

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-neutral-200">
          {/* Category Filter */}
          <div className="relative">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-white border border-neutral-300 px-4 py-2 pr-10 text-sm focus:outline-none focus:border-neutral-900 cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="sweaters">Sweaters</option>
              <option value="pants">Pants</option>
              <option value="tshirts">T-Shirts</option>
              <option value="shirts">Shirts</option>
              <option value="outerwear">Outerwear</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Gender Filter */}
          <div className="relative">
            <select 
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="appearance-none bg-white border border-neutral-300 px-4 py-2 pr-10 text-sm focus:outline-none focus:border-neutral-900 cursor-pointer"
            >
              <option value="all">All Genders</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Sort */}
          <div className="relative ml-auto">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-neutral-300 px-4 py-2 pr-10 text-sm focus:outline-none focus:border-neutral-900 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-neutral-600 mb-8">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>

            {/* Products Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-neutral-600 mb-4">No products found matching your filters.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all')
                    setSelectedGender('all')
                    setFilters({ category: [], priceRange: null, colors: [], sizes: [], minRating: 0 })
                  }}
                  className="text-sm font-medium hover:text-neutral-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
