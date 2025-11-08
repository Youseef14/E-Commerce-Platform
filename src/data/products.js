// Mock product data
export const products = [
  {
    id: 1,
    name: 'The Cashmere Crew',
    price: 100,
    category: 'sweaters',
    gender: 'women',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=800&q=80'
    ],
    colors: ['#D4B5A0', '#2C2C2C', '#E8E8E8'],
    description: 'A soft, luxurious cashmere sweater that\'s perfect for layering or wearing on its own.',
    details: 'Made from 100% Grade-A cashmere. Hand wash or dry clean.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviewCount: 124,
    inStock: true
  },
  {
    id: 2,
    name: 'The Cotton Box-Cut Tee',
    price: 35,
    category: 'tshirts',
    gender: 'women',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
    ],
    colors: ['#FFFFFF', '#2C2C2C', '#8B7D6B'],
    description: 'A classic boxy tee made from premium organic cotton.',
    details: 'Made from 100% organic cotton. Machine wash cold.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.5,
    reviewCount: 89,
    inStock: true
  },
  {
    id: 3,
    name: 'The Modern Ankle Pant',
    price: 78,
    category: 'pants',
    gender: 'women',
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
      'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&q=80'
    ],
    colors: ['#2C2C2C', '#4A5568', '#8B7D6B'],
    description: 'Tailored pants with a modern fit and clean lines.',
    details: 'Made from sustainable Italian fabric. Dry clean recommended.',
    sizes: ['00', '0', '2', '4', '6', '8', '10', '12'],
    rating: 4.7,
    reviewCount: 156,
    inStock: true
  },
  {
    id: 4,
    name: 'The Puffer Jacket',
    price: 198,
    category: 'outerwear',
    gender: 'women',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1548883354-94e3a9588e37?w=800&q=80'
    ],
    colors: ['#2C2C2C', '#4A5568'],
    description: 'A sustainable puffer jacket made from recycled materials.',
    details: 'Made from 100% recycled polyester. Machine wash cold.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviewCount: 203,
    inStock: true
  },
  {
    id: 5,
    name: 'The Wool Coat',
    price: 248,
    category: 'outerwear',
    gender: 'men',
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80',
      'https://images.unsplash.com/photo-1520367691844-1fb0487727bf?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80'
    ],
    colors: ['#8B7D6B', '#2C2C2C', '#4A5568'],
    description: 'A timeless wool coat with a modern silhouette.',
    details: 'Made from 100% Italian wool. Dry clean only.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.6,
    reviewCount: 78,
    inStock: true
  },
  {
    id: 6,
    name: 'The Performance Chino',
    price: 68,
    category: 'pants',
    gender: 'men',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80'
    ],
    colors: ['#8B7D6B', '#2C2C2C', '#4A5568'],
    description: 'Comfortable chinos with stretch for all-day wear.',
    details: 'Made from organic cotton with added stretch. Machine wash cold.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    rating: 4.4,
    reviewCount: 112,
    inStock: true
  },
  {
    id: 7,
    name: 'The Japanese Oxford Shirt',
    price: 58,
    category: 'shirts',
    gender: 'men',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80'
    ],
    colors: ['#FFFFFF', '#7BA3D0', '#E8E8E8'],
    description: 'A crisp oxford shirt made from premium Japanese cotton.',
    details: 'Made from 100% Japanese cotton. Machine wash cold.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.6,
    reviewCount: 94,
    inStock: true
  },
  {
    id: 8,
    name: 'The Denim Jacket',
    price: 98,
    category: 'outerwear',
    gender: 'unisex',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80',
      'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&q=80',
      'https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=800&q=80'
    ],
    colors: ['#4A5C8F', '#2C2C2C'],
    description: 'A classic denim jacket with a modern fit.',
    details: 'Made from organic cotton denim. Machine wash cold.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.8,
    reviewCount: 167,
    inStock: true
  },
  {
    id: 9,
    name: 'The Merino Sweater',
    price: 88,
    category: 'sweaters',
    gender: 'men',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80'
    ],
    colors: ['#8B7D6B', '#2C2C2C', '#E8E8E8'],
    description: 'A soft merino wool sweater perfect for any season.',
    details: 'Made from 100% merino wool. Hand wash or dry clean.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.7,
    reviewCount: 142,
    inStock: true
  },
  {
    id: 10,
    name: 'The Silk Blouse',
    price: 98,
    category: 'shirts',
    gender: 'women',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
    ],
    colors: ['#FFFFFF', '#2C2C2C', '#D4B5A0'],
    description: 'An elegant silk blouse with a relaxed fit.',
    details: 'Made from 100% silk. Dry clean only.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.5,
    reviewCount: 76,
    inStock: false
  },
  {
    id: 11,
    name: 'The Linen Shirt',
    price: 65,
    category: 'shirts',
    gender: 'men',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1603252110971-b8a57087be18?w=800&q=80'
    ],
    colors: ['#FFFFFF', '#7BA3D0', '#8B7D6B'],
    description: 'A breathable linen shirt for warm weather.',
    details: 'Made from 100% European linen. Machine wash cold.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.3,
    reviewCount: 61,
    inStock: true
  },
  {
    id: 12,
    name: 'The Wide Leg Jean',
    price: 88,
    category: 'pants',
    gender: 'women',
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
      'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800&q=80'
    ],
    colors: ['#4A5C8F', '#2C2C2C'],
    description: 'Modern wide-leg jeans with a flattering high rise.',
    details: 'Made from organic cotton denim. Machine wash cold.',
    sizes: ['24', '25', '26', '27', '28', '29', '30', '31', '32'],
    rating: 4.6,
    reviewCount: 198,
    inStock: true
  }
]

export const categories = [
  {
    id: 'sweaters',
    name: 'Sweaters',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80'
  },
  {
    id: 'pants',
    name: 'Pants',
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80'
  },
  {
    id: 'tshirts',
    name: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'
  },
  {
    id: 'outerwear',
    name: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80'
  }
]

export const blogPosts = [
  {
    id: 1,
    title: 'The Art of Sustainable Fashion',
    excerpt: 'Exploring how we\'re making fashion more sustainable, one piece at a time.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80',
    date: '2024-01-15',
    author: 'Sarah Johnson'
  },
  {
    id: 2,
    title: 'Behind the Scenes: Our Factory Tour',
    excerpt: 'Take a look inside our ethical manufacturing facilities.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    date: '2024-01-10',
    author: 'Michael Chen'
  },
  {
    id: 3,
    title: 'Styling Tips for Every Season',
    excerpt: 'How to build a versatile wardrobe that works year-round.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    date: '2024-01-05',
    author: 'Emma Williams'
  }
]
