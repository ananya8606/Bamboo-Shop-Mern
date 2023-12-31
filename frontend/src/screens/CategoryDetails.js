import React, { useState, useEffect } from 'react'
import Slider from 'react-rangeslider'
import ProductCard from '../components/ProductCard'
import 'react-rangeslider/lib/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { listCategoryDetails } from '../actions/productActions'
import Loading from '../components/Loading'
import { y } from "../Utils/translateLibrary/category";
const CategoryDetails = ({ match }) => {
  const productId = match.params.id
  const settings = useSelector((state) => state.settings);
    const { language, currency } = settings;
  const dispatch = useDispatch()
  const productCategory = useSelector((state) => state.productCategory)
  const { loading, products, error } = productCategory
  const [minValue, setMinValue] = useState(100)

  const [value, setValue] = useState(20000)


  const categoryId = match.params.categoryName

  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  useEffect(() => {
    dispatch(listCategoryDetails(categoryId, value))
  }, [categoryId, value])

  return (
    <div className='category-outermost'>
      <div className='category'>
        <div className='filter-options'>
          <span>{y.price[language]}</span>
          <div className='slider-filter'>
            <Slider
              className='manageslider'
              value={value}
              min={100}
              max={200000}
              orientation='horizontal'
              onChange={handleChange}
            />
          </div>
          <div className='rangeNumber'>
            <span>
              <span>{y.min[language]} Rs.</span>
              <input type='number' value={minValue} />
            </span>
            <span>
              <span>{y.max[language]} Rs.</span>

              <input
                type='number'
                value={value}
                onChange={handleChange}
              />
            </span>
          </div>
          <br />
        </div>
        {loading && <Loading />}

        <div className='category-content'>
          {products.length > 0 &&
            products.map((filter) => (
              <ProductCard key={filter._id} product={filter} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryDetails
