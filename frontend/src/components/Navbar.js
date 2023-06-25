import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { productsSearch } from '../actions/productActions'
import Loading from './Loading'
import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from "react-i18next";
import { nav } from "../Utils/translateLibrary/navbar";

/*const { t } = useTranslation();:

This line uses the useTranslation hook to access the translation function t from a translation library or context.
The useTranslation hook is commonly used in internationalization (i18n) scenarios to retrieve translated strings based on the selected language.
By using const { t } = useTranslation();, the t function is assigned to the t constant, allowing you to use it within
the component to retrieve translated strings.

const dispatch = useDispatch();:

This line uses the useDispatch hook from the react-redux library to access the Redux store's dispatch function.
The dispatch function is used to dispatch actions to the Redux store, which can trigger state updates and other side effects.
By using const dispatch = useDispatch();, the dispatch function is assigned to the dispatch constant, 
allowing you to use it within the component to dispatch actions to the Redux store.*/

/*Actions and reducers are essential parts of the Redux pattern, which is a predictable state management 
system commonly used in React applications. Here's a high-level overview of how actions and reducers work together:

Actions:

Actions are plain JavaScript objects that represent an intention to change the state.
They describe what happened in the application, such as a user interaction or an asynchronous API call.
Actions have a type property that specifies the type of action being performed. This type is typically defined as a string constant.
Actions can also have additional data or payload that provides information needed to update the state.

Action Creators:

Action creators are functions that create and return action objects.
They encapsulate the logic for creating actions and can also perform any necessary transformations or calculations before returning the action object.
Action creators are typically used to encapsulate complex or asynchronous operations, such as API calls, before dispatching the resulting action.

Reducers:

Reducers are pure functions that specify how the application's state should change in response to actions.
They take the current state and an action as arguments and return a new state object based on the action type and payload.
Reducers should not mutate the existing state but instead create a new state object with the desired changes.
Reducers are typically defined for each slice of the application's state and combined using a root reducer.

Store:

The store holds the application state, which is managed by reducers and updated in response to dispatched actions.
The store is created using the createStore function provided by the Redux library.
It provides methods like getState to access the current state and dispatch to dispatch actions to the reducers.

Dispatching Actions:

Actions are dispatched to the store using the dispatch method provided by the store.
Dispatching an action triggers the corresponding reducer(s) to handle the action and update the state accordingly.
The store notifies subscribers, such as React components, about the state changes, causing them to re-render with the updated data.
Overall, the flow can be summarized as follows: 
Actions are dispatched, reducers handle the actions and update the state, and components subscribe to the state changes and re-render based on the updated state.*/

const Navbar = () => {
const { t } = useTranslation();
const dispatch = useDispatch();
const settings = useSelector((state) => state.settings);
  const { language } = settings;
  const showList = () => {
    document.getElementById('extraitems').classList.toggle('show-list')
  }
  const Logout = () => {
    dispatch(logout())
    showAuthOptions()
  }
  const [text, setText] = useState(undefined)
  const productSearch = useSelector((state) => state.productSearch)
  const { loading, products, error } = productSearch
  const userLogin = useSelector((state) => state.userLogin)
  const { userInformation: userInfo } = userLogin
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  useEffect(() => {
    dispatch(productsSearch(text))
  }, [text])
  const showAuthOptions = () => {
    document.getElementById('showOptions').classList.toggle('showOptionsList')
  }
  return (
    <div className='nav'>
      <div className='navbar'>
        <div className='bars'>
          <i className='fas fa-bars' onClick={showList}></i>
        </div>

        <Link to='/'>
          <h3>{nav.ecomm[language]}</h3>
        </Link>
        <div className='search-form'>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <i className='fas fa-search'></i>
          <div className='search-results'>
            {loading && <Loading />}
            {products &&
              products.length > 0 &&
              products.map((product) => (
                <div className='searched'>
                  <div className='searchedItem' key={product._id}>
                    <Link
                      to={`/category/${product.category}/${product.subCategory}/${product._id}`}
                    >
                      {' '}
                      <img src={product.image} alt='' />
                    </Link>
                    <div className='searchItem-inner'>
                      <span>{product.brandName}</span>
                      <span>
                        <span className='brandName'>Brand</span> {product.brand}
                      </span>
                    </div>
                  </div>
                  <div className='underline'></div>
                </div>
              ))}
          </div>
        </div>
        {/* </div> */}
        <div className='shopping'>
          <Link to={`/cart/cartItems/?qty`}>
            <i className='fas fa-shopping-cart'>
              {' '}
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </i>
          </Link>
        </div>
        <div className='shopping'>
        <Link to="/settings">
       <i className="fas fa-cog"></i>
      </Link>
      </div>
        <div className='my-account' id='my-account'>
          <i className='far fa-user'></i>
          <div className='my-account-text' onClick={showAuthOptions}>
            <span>
              {nav.namaste[language]}{' '}
              {userInfo && userInfo.isAdmin
                ? 'Admin'
                : userInfo && userInfo.name}
            </span>
            <div className='account-detail'>
              {' '}
              <span>{nav.myaccount[language]}</span>
              <i className='fas fa-chevron-down'></i>
            </div>
          </div>
          <div className='showOptions' id='showOptions'>
            {!userInfo ? (
              <>
                <Link to='/login' onClick={showAuthOptions}>
                {nav.signin[language]}
                </Link>
                <span className='new-customer'>{nav.newcustomer[language]}</span>
                <Link to='/register' onClick={showAuthOptions}>
                {nav.register[language]}
                </Link>{' '}
              </>
            ) : (
              <div className='weird'>
                <Link
                  to={`/my-account/${userInfo._id}`}
                  onClick={showAuthOptions}
                >
                {nav.myaccount[language]}
                </Link>
                <div className='underline'></div>
                <Link
                  to={`/myorders/${userInfo._id}`}
                  onClick={showAuthOptions}
                >
                {nav.myorders[language]}
                </Link>
                <div className='underline'></div>
                {userInfo.isAdmin && (
                  <>
                    {' '}
                    <Link to={`/admin/allProducts`} onClick={showAuthOptions}>
                  {nav.allproducts[language]}
                    </Link>
                    <div className='underline'></div>
                    <Link to={`/admin/allOrders`} onClick={showAuthOptions}>
                    {nav.allorders[language]}
                    </Link>
                    <div className='underline'></div>
                    <Link to={`/admin/allUsers`} onClick={showAuthOptions}>
                    {nav.allusers[language]}
                    </Link>
                    <div className='underline'></div>
                    <Link to={`/admin/ProductCreate`} onClick={showAuthOptions}>
                    {nav.create[language]}
                    </Link>
                    <div className='underline'></div>
                  </>
                )}
                <button className='logout' onClick={Logout}>
                  {nav.logout[language]}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='search-form-small'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <i className='fas fa-search'></i>
        <div className='search-results'>
          {loading && <Loading />}
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <div className='searched'>
                <div className='searchedItem' key={product._id}>
                  <Link
                    to={`/category/${product.category}/${product.subCategory}/${product._id}`}
                  >
                    {' '}
                    <img src={product.image} alt='' />
                  </Link>
                  <div className='searchItem-inner'>
                    <span>{product.brandName}</span>
                    <span>
                      <span className='brandName'>{nav.brand[language]}</span> {product.brand}
                    </span>
                  </div>
                </div>
                <div className='underline'></div>
              </div>
            ))}
        </div>
      </div>
      <div className='extra-items' id='extraitems'>
        <div className='category-shop'>
          <h3>{nav.shop[language]}</h3>
          <i className='fas fa-times' onClick={showList}></i>
        </div>
        <ul className='shopping-categories'>
          <li className='inline-items'>
            <Link to='/categories/Kitchen'>{nav.kitchen[language]}</Link>
            <ul className='inline-list'>
              <li>
                <Link className='category-item' to='/category/Bamboo Sup'>
                  {nav.bamboosup[language]}
                </Link>
              </li>
              <li>
                <Link to='/category/Bamboo Tokri'>{nav.bambootokri[language]}</Link>
              </li>
            </ul>
          </li>
          <li className='inline-items'>
            <Link to='/categories/Personal Care'>{nav.personalcare[language]}</Link>
            <ul className='inline-list'>
              <li>
                <Link to='/category/Bamboo Charcoal'>{nav.bamboocharcoal[language]}</Link>
              </li>
              <li>
                <Link to='/category/Bamboo Toothbrush'>{nav.bambootoothbrush[language]}</Link>
              </li>
            </ul>
          </li>
          <li className='inline-items'>
            <Link to='/categories/Furniture'>{nav.furniture[language]}</Link>
            <ul className='inline-list'>
              <li>
                <Link to='/category/Bamboo Chairs'>{nav.bamboochairs[language]}</Link>
              </li>
              <li>
                <Link to='/category/Bamboo Sofa'>{nav.bamboosofa[language]}</Link>
              </li>
            </ul>
          </li>
          <li className='inline-items'>
            <Link to='/categories/Flooring'>{nav.flooring[language]}</Link>
            <ul className='inline-list'>
              <li>
                <Link to='/category/Bamboo Flooring'>{nav.bambooflooring[language]}</Link>
              </li>
              <li>
                <Link to='/category/Bamboo Tissue Rolls'>{nav.bambootissuerolls[language]}</Link>
              </li>
            </ul>
          </li>
          <li className='inline-items'>
            <Link to='/categories/Decoration'>{nav.decoration[language]}</Link>
            <ul className='inline-list'>
              <li>
                <Link to='/category/Bamboo Indoor Plants'>{nav.bambooindoorplants[language]}</Link>
              </li>
              <li>
                <Link to='/category/Bamboo Handicrafts'>{nav.bamboohandicrafts[language]}</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
