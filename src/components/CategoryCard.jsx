import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
  return (
    <Link 
      to={`/shop?category=${category.id}`}
      className="group block"
    >
      <div className="aspect-square bg-neutral-100 mb-4 overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-center text-sm font-medium uppercase tracking-wider group-hover:text-neutral-600 transition-colors">
        {category.name}
      </h3>
    </Link>
  )
}

export default CategoryCard
