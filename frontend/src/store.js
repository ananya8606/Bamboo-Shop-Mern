import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
  productCategoryReducer,
  productsubCategoryReducer,
  productSearchReducer,
  productReviewCreateReducer,
  productCreateReducer,
  productEditReducer,
  productDeleteReducer,
  productImageReducer,
} from './reducers/productReducers'
import {
  orderCreateReducer,
  orderListMyReducer,
  orderPayReducer,
  orderListReducer,
  orderDeliverReducer,
} from './reducers/orderReducers'

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userUpdateLanguageReducer,
  userListReducer,
  userDeleteReducer,
} from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'
import { changeSettingsReducer } from "./reducers/settingsReducers";

/*The combineReducers function is imported from Redux to combine multiple reducers into a single reducer function.
It takes an object as an argument, where each key represents a slice of the state and its value represents the
corresponding reducer function. 
These reducer functions define how the state should be updated in response to different actions.*/
const reducer = combineReducers({
  // Product
  productList:productListReducer,
  productDetails:productDetailsReducer,
  productCategory:productCategoryReducer,
  productsubCategory: productsubCategoryReducer,
  productSearch:productSearchReducer,
  productReviewCreate:productReviewCreateReducer,
  productCreate: productCreateReducer,
  productEdit:productEditReducer,
  productDelete:productDeleteReducer,
  uploadImage: productImageReducer,
  // Cart
  cart: cartReducer,
  // Settings
  settings: changeSettingsReducer,
  // User
  userLogin:userLoginReducer,
  userRegister:userRegisterReducer,
  userDetails:userDetailsReducer,
  updateProfile:userUpdateProfileReducer,
  userUpdateLanguage:userUpdateLanguageReducer,
  userList:userListReducer,
  userDelete:userDeleteReducer,
  // Orders
  orderCreate:orderCreateReducer,
  orderListMy:orderListMyReducer,
  orderPay:orderPayReducer,
  orderList:orderListReducer,
  orderDeliver:orderDeliverReducer,

})

/*The code defines initial values for the cartItemsFromStorage, userInfoFromStorage, shippingAddressFromStorage, paymentMethodFromStorage, and
settingsFromStorage variables by retrieving data from the browser's localStorage. These values will be used as the initial state of the corresponding
slices in the Redux store.*/

const cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : null;

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
    ? JSON.parse(localStorage.getItem("paymentMethod"))
    : null;

const settingsFromStorage = localStorage.getItem("settings")
    ? JSON.parse(localStorage.getItem("settings"))
    : { language: "en", country: "in", currency: "inr" };

/*The initialState constant is defined to represent the initial state of the Redux store. 
It is an object that includes the initial values for the cart, settings, and userLogin slices.*/
const initialState = {
  cart: {
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
      paymentMethod: paymentMethodFromStorage,
  },
  settings: settingsFromStorage,
  userLogin: { userInformation: userInfoFromStorage },
}

/*The middleware constant is an array that contains the thunk middleware. Middleware can intercept
dispatched actions and perform async operations or modify actions before they reach the reducers.*/

const middleware = [thunk]
  
/*The createStore function is imported from Redux to create a Redux store. It is responsible for holding the complete state tree of your application.
The applyMiddleware function is imported from Redux to apply middleware to the dispatch process of Redux. Middleware provides a way to extend Redux's functionality.
The composeWithDevTools function is imported from the Redux DevTools Extension package. It enhances the Redux DevTools extension, allowing you to use additional debugging capabilities.*/
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
