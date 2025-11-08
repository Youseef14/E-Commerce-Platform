import React from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/products'

const Blog = () => {
  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">The Journal</h1>
          <p className="text-neutral-600 leading-relaxed">
            Stories about sustainable fashion, ethical manufacturing, and the people behind our products.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              className="aspect-[4/3] bg-neutral-100 bg-cover bg-center order-2 lg:order-1"
              style={{
                backgroundImage: `url(${blogPosts[0].image})`
              }}
            />
            <div className="order-1 lg:order-2">
              <span className="text-sm text-neutral-600 mb-3 block">
                {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <p className="text-sm text-neutral-600 mb-6">By {blogPosts[0].author}</p>
              <Link 
                to="#" 
                className="text-sm font-medium hover:text-neutral-600 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map(post => (
            <Link key={post.id} to="#" className="group">
              <div 
                className="aspect-[4/3] bg-neutral-100 mb-4 bg-cover bg-center group-hover:opacity-90 transition-opacity"
                style={{
                  backgroundImage: `url(${post.image})`
                }}
              />
              <span className="text-xs text-neutral-600 mb-2 block">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-neutral-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-neutral-600 mb-3">
                {post.excerpt}
              </p>
              <p className="text-xs text-neutral-500">By {post.author}</p>
            </Link>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-20 pt-20 border-t border-neutral-200">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Sustainability', 'Behind the Scenes', 'Style Tips', 'Product Stories', 'Company News'].map(category => (
              <button 
                key={category}
                className="px-6 py-3 border border-neutral-300 hover:border-neutral-900 text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-beige p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Get the latest stories, product launches, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email address"
              className="flex-1 px-4 py-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
            />
            <button className="px-6 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
