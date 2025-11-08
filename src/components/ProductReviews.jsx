import React, { useState } from 'react'
import { Star } from 'lucide-react'
import { reviews } from '../data/reviews'
import Button from './Button'

const ProductReviews = ({ productId, rating, reviewCount }) => {
  const [showAll, setShowAll] = useState(false)
  const productReviews = reviews[productId] || []
  const displayedReviews = showAll ? productReviews : productReviews.slice(0, 3)

  const StarRating = ({ rating }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-yellow-500 text-yellow-500' : 'text-neutral-300'}
        />
      ))}
    </div>
  )

  const RatingBar = ({ stars, percentage }) => (
    <div className="flex items-center gap-2">
      <span className="text-sm w-12">{stars} stars</span>
      <div className="flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-yellow-500 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm text-neutral-600 w-12 text-right">{percentage}%</span>
    </div>
  )

  return (
    <div className="border-t border-neutral-200 pt-12 mt-12">
      <h2 className="text-2xl font-serif font-bold mb-8">Customer Reviews</h2>

      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="flex items-end gap-4 mb-4">
            <div className="text-5xl font-bold">{rating}</div>
            <div>
              <StarRating rating={Math.floor(rating)} />
              <p className="text-sm text-neutral-600 mt-1">Based on {reviewCount} reviews</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <RatingBar stars={5} percentage={75} />
          <RatingBar stars={4} percentage={15} />
          <RatingBar stars={3} percentage={5} />
          <RatingBar stars={2} percentage={3} />
          <RatingBar stars={1} percentage={2} />
        </div>
      </div>

      {/* Reviews List */}
      {productReviews.length > 0 ? (
        <div className="space-y-6">
          {displayedReviews.map((review) => (
            <div key={review.id} className="border-b border-neutral-200 pb-6 last:border-0">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={review.rating} />
                    {review.verified && (
                      <span className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold">{review.title}</h3>
                </div>
                <span className="text-sm text-neutral-600">{new Date(review.date).toLocaleDateString()}</span>
              </div>
              <p className="text-neutral-600 mb-2">{review.content}</p>
              <p className="text-sm text-neutral-500">{review.author}</p>
            </div>
          ))}

          {productReviews.length > 3 && (
            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Less' : `Show All ${productReviews.length} Reviews`}
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-neutral-600 mb-4">No reviews yet. Be the first to review this product!</p>
          <Button variant="outline">Write a Review</Button>
        </div>
      )}
    </div>
  )
}

export default ProductReviews
