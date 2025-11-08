import React from 'react'

export const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="aspect-[3/4] bg-neutral-200 mb-4" />
      <div className="space-y-2">
        <div className="h-4 bg-neutral-200 rounded w-3/4" />
        <div className="h-4 bg-neutral-200 rounded w-1/2" />
        <div className="flex space-x-2">
          <div className="w-4 h-4 rounded-full bg-neutral-200" />
          <div className="w-4 h-4 rounded-full bg-neutral-200" />
          <div className="w-4 h-4 rounded-full bg-neutral-200" />
        </div>
      </div>
    </div>
  )
}

export const ProductDetailsSkeleton = () => {
  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-pulse">
          <div className="aspect-[3/4] bg-neutral-200" />
          <div className="space-y-6">
            <div className="h-10 bg-neutral-200 rounded w-3/4" />
            <div className="h-8 bg-neutral-200 rounded w-1/4" />
            <div className="h-20 bg-neutral-200 rounded" />
            <div className="h-12 bg-neutral-200 rounded" />
            <div className="h-12 bg-neutral-200 rounded" />
            <div className="h-14 bg-neutral-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const ShopSkeleton = () => {
  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 animate-pulse">
          <div className="h-12 bg-neutral-200 rounded w-1/4 mb-4" />
          <div className="h-6 bg-neutral-200 rounded w-1/3" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[...Array(8)].map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
