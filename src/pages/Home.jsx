import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'

const Home = () => {
  const newArrivals = products.slice(0, 4)
  const bestSellers = products.slice(4, 8)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] bg-neutral-100">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
          <div className="max-w-xl text-white">
            <p className="text-sm uppercase tracking-wider mb-4">Your Cozy Era</p>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Fall Into Style
            </h1>
            <p className="text-lg mb-8 font-light">
              Discover our new collection of sustainable, timeless pieces designed for everyday wear.
            </p>
            <Link to="/shop">
              <Button size="lg" className="shadow-lg">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Shop by Category</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Explore our curated collections of essential pieces
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 lg:py-24 bg-beige dark:bg-neutral-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold">New Arrivals</h2>
            <Link to="/shop" className="text-sm font-medium hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold">Best Sellers</h2>
            <Link to="/shop" className="text-sm font-medium hover:text-neutral-600 transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* The Holiday Outfit */}
      <section className="py-16 lg:py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div 
                className="aspect-[3/4] bg-neutral-800 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80)'
                }}
              />
            </div>
            <div className="lg:pl-12">
              <p className="text-sm uppercase tracking-wider mb-4 text-neutral-400">Limited Edition</p>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">The Holiday Outfit</h2>
              <p className="text-lg mb-8 text-neutral-300 font-light">
                Elevate your holiday wardrobe with our carefully curated collection. 
                From cozy sweaters to elegant outerwear, we've got everything you need 
                to look and feel your best this season.
              </p>
              <Link to="/shop">
                <Button variant="secondary" size="lg">
                  Shop the Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethical Manufacturing</h3>
              <p className="text-neutral-600">
                We partner with ethical factories that provide fair wages and safe working conditions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Materials</h3>
              <p className="text-neutral-600">
                From organic cotton to recycled polyester, we choose materials that are better for the planet.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Radical Transparency</h3>
              <p className="text-neutral-600">
                We share the true cost of our products and where they're made.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
