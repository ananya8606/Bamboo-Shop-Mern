import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {

/*The axios.get() method returns a promise that resolves with a response object.
The response object contains various properties, but the code snippet is specifically interested in the data property.
The destructuring assignment syntax is used to extract the data property from the response object.
This line of code { data } = await axios.get(...) assigns the value of data from the response object to a constant named data.*/
  
  const { data } = await axios.get(`https://mern-deploy-backend-twq1.onrender.com/api/products/${id}`)
  
/*A Redux action is dispatched using the dispatch function passed as an argument to the action creator. 
The dispatched action is an object that describes the action to be performed.*/
  
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.brandName,
      image: data.image,
      price: data.discountedCost,
      countInStock: data.quantity,
      qty,
      category: data.category,
      subCategory: data.subCategory,
    },
  })
  
/*After dispatching the action, the current cart items from the Redux store are stored
in the browser's localStorage using localStorage.setItem(). The getState() function is 
used to retrieve the current state from the Redux store, and getState().cart.cartItems specifically accesses the cart items.

By calling the addToCart action creator with the appropriate id and qty parameters, it triggers an asynchronous HTTP request to
fetch the product data. Once the data is received, it dispatches a CART_ADD_ITEM action with the product details as the payload.
Finally, it updates the cart items in the localStorage to reflect the changes made to the cart.*/
  
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })

  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
