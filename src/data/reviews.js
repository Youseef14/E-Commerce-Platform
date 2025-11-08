// Product reviews data
export const reviews = {
  1: [ // The Cashmere Crew
    {
      id: 1,
      productId: 1,
      author: 'Sarah M.',
      rating: 5,
      date: '2024-01-20',
      title: 'Absolutely love it!',
      content: 'This cashmere sweater is incredibly soft and warm. Perfect for the winter season. The quality is exceptional and worth every penny.',
      verified: true
    },
    {
      id: 2,
      productId: 1,
      author: 'Michael K.',
      rating: 5,
      date: '2024-01-15',
      title: 'Best sweater I own',
      content: 'The fit is perfect and the material is luxurious. I\'ve washed it twice and it still looks brand new.',
      verified: true
    },
    {
      id: 3,
      productId: 1,
      author: 'Emma L.',
      rating: 4,
      date: '2024-01-10',
      title: 'Great quality',
      content: 'Beautiful sweater, runs slightly large so consider sizing down. Otherwise perfect!',
      verified: true
    }
  ],
  2: [ // The Cotton Box-Cut Tee
    {
      id: 4,
      productId: 2,
      author: 'Jessica R.',
      rating: 5,
      date: '2024-01-18',
      title: 'Perfect basic tee',
      content: 'Love the relaxed fit! Goes with everything in my wardrobe.',
      verified: true
    },
    {
      id: 5,
      productId: 2,
      author: 'David P.',
      rating: 4,
      date: '2024-01-12',
      title: 'Great quality cotton',
      content: 'Soft and comfortable. Holds up well after multiple washes.',
      verified: true
    }
  ],
  3: [ // The Modern Ankle Pant
    {
      id: 6,
      productId: 3,
      author: 'Amanda W.',
      rating: 5,
      date: '2024-01-22',
      title: 'Professional and stylish',
      content: 'These pants are perfect for the office. The fit is flattering and they\'re incredibly comfortable.',
      verified: true
    },
    {
      id: 7,
      productId: 3,
      author: 'Rachel B.',
      rating: 5,
      date: '2024-01-16',
      title: 'My new favorites!',
      content: 'I bought these in three colors. They\'re that good!',
      verified: true
    }
  ],
  4: [ // The Puffer Jacket
    {
      id: 8,
      productId: 4,
      author: 'Chris T.',
      rating: 5,
      date: '2024-01-19',
      title: 'So warm!',
      content: 'This jacket keeps me warm even in the coldest weather. Love that it\'s made from recycled materials.',
      verified: true
    }
  ]
}

export const promo_codes = [
  {
    code: 'WELCOME10',
    discount: 10,
    type: 'percentage',
    description: '10% off your first order',
    minAmount: 0,
    expiryDate: '2024-12-31'
  },
  {
    code: 'SAVE20',
    discount: 20,
    type: 'percentage',
    description: '20% off orders over $100',
    minAmount: 100,
    expiryDate: '2024-12-31'
  },
  {
    code: 'FREESHIP',
    discount: 10,
    type: 'fixed',
    description: 'Free shipping',
    minAmount: 0,
    expiryDate: '2024-12-31'
  }
]
