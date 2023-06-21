const shoppingItems = [
  {
    // _id: 1,
    category: 'Kitchen',
    subCategory: 'Bamboo Sup',
    brandName: 'Bundu',
    cost: 40000,
    discount: 5,
    image: '/Images/products/tv1.jpeg',
    stars: 3,
    reviews: [
      {
        // _id: 1,
        date: '2078-01-10',
        stars: 4,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
      {
        // _id: 2,
        date: '2078-01-10',
        stars: 3,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
    ],
    description: 'Awesome product',
    quantity: 20,
    brand: 'Bundu',
  },
  {
    // _id: 2,
    category: 'Kitchen',
    subCategory: 'Bamboo Tokri',
    brandName: 'Bundu',

    cost: 30000,
    discount: 10,
    image: '/Images/products/tv2.jpeg',
    stars: 3,
    reviews: [
      {
        // _id: 1,
        date: '2078-01-10',
        stars: 4,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
      {
        // _id: 2,
        date: '2078-01-10',
        stars: 3,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
    ],
    description: 'Awesome product',
    quantity: 30,
    brand: 'Bundu',
  },
  {
    // _id: 3,
    category: 'Personal Care',
    subCategory: 'Bamboo Charcoal',
    brandName: 'Bundu',

    cost: 10000,
    image: '/Images/products/mobile1.jpeg',
    stars: 3,
    reviews: [
      {
        // _id: 1,
        date: '2078-01-10',
        stars: 4,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
      {
        // _id: 2,
        date: '2078-01-10',
        stars: 3,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
    ],
    description: 'Awesome product',
    quantity: 200,
    brand: 'Bundu',
  },
  {
    // _id: 4,
    category: 'Personal Care',
    subCategory: 'Bamboo Toothbrush',
    brandName: 'Bundu',

    cost: 4000,
    discount: 30,
    image: '/Images/products/mobile2.jpeg',
    stars: 3,
    reviews: [
      {
        // _id: 1,
        date: '2078-01-10',
        stars: 4,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
      {
        // _id: 2,
        date: '2078-01-10',
        stars: 3,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
    ],
    description: 'Awesome product',
    quantity: 30,
    brand: 'Bundu',
  },
  {
    // _id: 5,
    category: 'Furniture',
    subCategory: 'Bamboo Chairs',
    brandName: 'Bundu',

    cost: 4000,
    image: '/Images/products/shirt2.jpeg',
    stars: 3,
    reviews: [
      {
        // _id: 1,
        date: '2078-01-10',
        stars: 4,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
      {
        // _id: 2,
        date: '2078-01-10',
        stars: 3,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
    ],
    description: 'Awesome product',
    quantity: 30,
    brand: 'Bundu',
  },
  {
    // _id: 6,
    category: 'Furniture',
    subCategory: 'Bamboo Sofa',
    brandName: 'Bundu',
    cost: 4000,
    discount: 30,
    image: '/Images/products/shirt1.jpeg',
    stars: 3,
    reviews: [
      {
        // _id: 1,
        date: '2078-01-10',
        stars: 4,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
      {
        // _id: 2,
        date: '2078-01-10',
        stars: 3,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
    ],
    description: 'Awesome product',
    quantity: 30,
    brand: 'Bundu',
  },
  {
    // _id: 7,
    category: 'Flooring',
    subCategory: 'Bamboo Flooring',
    brandName: 'Bundu',

    cost: 4000,
    image: '/Images/products/paint2.jpeg',
    stars: 3,
    reviews: [
      {
        // _id: 1,
        date: '2078-01-10',
        stars: 4,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
      {
        // _id: 2,
        date: '2078-01-10',
        stars: 3,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
    ],
    description: 'Awesome product',
    quantity: 30,
    brand: 'Bundu',
  },
  {
    // _id: 8,
    category: 'Flooring',
    subCategory: 'Bamboo Tissue Rolls',
    brandName: 'jeans',

    cost: 4000,
    discount: 30,
    image: '/Images/products/paint1.jpeg',
    stars: 3,
    reviews: [
      {
        // _id: 1,
        date: '2078-01-10',
        stars: 4,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
      {
        // _id: 2,
        date: '2078-01-10',
        stars: 3,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
    ],
    description: 'Awesome product',
    quantity: 30,
    brand: 'Bundu',
  },
  {
    // _id: 9,
    category: 'Decoration',
    subCategory: 'Bamboo Indoor Plants',
    brandName: 'Bundu',

    cost: 4000,
    image: '/Images/products/saree2.jpeg',
    stars: 3,
    reviews: [
      {
        // _id: 1,
        date: '2078-01-10',
        stars: 4,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
      {
        // _id: 2,
        date: '2078-01-10',
        stars: 3,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
    ],
    description: 'Awesome product',
    quantity: 30,
    brand: 'Bundu',
  },
  {
    // _id: 10,
    category: 'Decoration',
    subCategory: 'Bamboo Handicrafts',
    brandName: 'Bundu',

    cost: 4000,
    discount: 30,
    image: '/Images/products/saree1.jpeg',
    stars: 3,
    reviews: [
      {
        // _id: 1,
        date: '2078-01-10',
        stars: 4,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
      {
        // _id: 2,
        date: '2078-01-10',
        stars: 3,
        description: 'Nice Product and you must buy it as well',
        reviewedBy: 'Upendra Dhamala',
      },
    ],
    description: 'Awesome product',
    quantity: 30,
    brand: 'Bundu',
  }
]
export default shoppingItems
