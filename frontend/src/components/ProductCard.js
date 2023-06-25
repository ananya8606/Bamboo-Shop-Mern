import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import { useSelector } from 'react-redux'
import { p } from "../Utils/translateLibrary/productDetails";

/*The code uses the useSelector hook from react-redux to access the Redux store.
It extracts the settings object from the store, which likely contains language and currency information.*/

const ProductCard = ({ product }) => {
const settings = useSelector((state) => state.settings);
const { language,currency } = settings;
  return (
    <div className='card-outer'>
      <Link
        to={`/category/${product.category}/${product.subCategory}/${product._id}`}
      >
        {' '}
        <img src={product.image} alt='product' />
      </Link>
      <div className='product-details'>
        <p className='productName'>{product.brandName}</p>
        <p className='price'>
          {product.discount
            ? 'Rs.' +
              Math.floor(
                `${product.cost - (product.discount / 100) * product.cost}`
              )
            : `Rs. ${product.cost}`}
        </p>
        {product.discount && (
          <div className='discounted-section'>
            <p className='previous-price'>{product.cost}</p>
            <p className='dpercent'>-{product.discount}%</p>
          </div>
        )}
        <div className='reviews-section'>
          <span className='star-section'>
            <Rating value={product.stars} />
          </span>
          {product.reviews && (
            <span className='reviewsno'>({product.reviews.length})</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
