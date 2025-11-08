import React, { useState } from 'react'
import { X, ChevronDown, ChevronUp } from 'lucide-react'

const FilterSidebar = ({ filters, setFilters, onClose }) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    color: true,
    size: true,
    rating: true
  })

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: '$200+', min: 200, max: Infinity }
  ]

  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Beige', hex: '#D4B5A0' },
    { name: 'Navy', hex: '#4A5568' },
    { name: 'Gray', hex: '#8B7D6B' }
  ]

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const categories = ['sweaters', 'pants', 'tshirts', 'shirts', 'outerwear']

  const FilterSection = ({ title, sectionKey, children }) => (
    <div className="border-b border-neutral-200 pb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full py-3 font-medium"
      >
        {title}
        {expandedSections[sectionKey] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {expandedSections[sectionKey] && <div className="mt-3">{children}</div>}
    </div>
  )

  return (
    <div className="bg-white h-full overflow-y-auto">
      <div className="p-6 border-b border-neutral-200 flex items-center justify-between lg:hidden">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold hidden lg:block">Filters</h2>
          <button
            onClick={() => setFilters({ category: [], priceRange: null, colors: [], sizes: [], minRating: 0 })}
            className="text-sm text-neutral-600 hover:text-neutral-900"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-4">
          {/* Category */}
          <FilterSection title="Category" sectionKey="category">
            <div className="space-y-2">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.category.includes(cat)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters({ ...filters, category: [...filters.category, cat] })
                      } else {
                        setFilters({ ...filters, category: filters.category.filter(c => c !== cat) })
                      }
                    }}
                    className="rounded border-neutral-300"
                  />
                  <span className="text-sm capitalize">{cat}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Price Range */}
          <FilterSection title="Price" sectionKey="price">
            <div className="space-y-2">
              {priceRanges.map((range, index) => (
                <label key={index} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priceRange"
                    checked={filters.priceRange?.min === range.min && filters.priceRange?.max === range.max}
                    onChange={() => setFilters({ ...filters, priceRange: range })}
                    className="border-neutral-300"
                  />
                  <span className="text-sm">{range.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Color */}
          <FilterSection title="Color" sectionKey="color">
            <div className="grid grid-cols-5 gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => {
                    if (filters.colors.includes(color.hex)) {
                      setFilters({ ...filters, colors: filters.colors.filter(c => c !== color.hex) })
                    } else {
                      setFilters({ ...filters, colors: [...filters.colors, color.hex] })
                    }
                  }}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    filters.colors.includes(color.hex) ? 'border-neutral-900 scale-110' : 'border-neutral-300'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </FilterSection>

          {/* Size */}
          <FilterSection title="Size" sectionKey="size">
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    if (filters.sizes.includes(size)) {
                      setFilters({ ...filters, sizes: filters.sizes.filter(s => s !== size) })
                    } else {
                      setFilters({ ...filters, sizes: [...filters.sizes, size] })
                    }
                  }}
                  className={`py-2 border text-sm font-medium transition-all ${
                    filters.sizes.includes(size)
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-neutral-300 hover:border-neutral-900'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Rating */}
          <FilterSection title="Rating" sectionKey="rating">
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.minRating === rating}
                    onChange={() => setFilters({ ...filters, minRating: rating })}
                    className="border-neutral-300"
                  />
                  <span className="text-sm flex items-center">
                    {rating}
                    <span className="ml-1 text-yellow-500">★</span>
                    <span className="ml-1 text-neutral-600">& up</span>
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
