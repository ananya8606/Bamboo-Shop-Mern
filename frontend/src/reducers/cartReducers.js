import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_CLEAR_ITEMS,
  } from '../constants/cartConstants'
  
  export const cartReducer = (
    state = { cartItems: [], shippingAddress: {} },
    action
  ) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload
            
  /*the product property of an item is used as a unique identifier or key to determine whether an item
  should be removed from the cart. Each item in the cartItems array is expected to have a product property that corresponds to a unique identifier for that item.*/
            
        const existItem = state.cartItems.find((x) => x.product === item.product)
            
  /*...state: The spread operator (...) is used to create a shallow copy of the current state object. This ensures that the original state is not mutated directly.
cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x): In this line, the cartItems array is updated. 
The map function is used to iterate through each item in the cartItems array.
For each item x in the cartItems array:
The condition x.product === existItem.product checks if the product of the current item x matches the product of the existing item in the cart (existItem).
If the condition is true, it means that the item being added is already present in the cart. In this case, the new item (item) is used instead of the existing item x in the updated array.
If the condition is false, it means that the current item x is different from the existing item. In this case, the current item x is kept as it is in the updated array.
The updated cartItems array is included in the returned object.*/

        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          }
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          }
        }
      case CART_REMOVE_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        }
      case CART_SAVE_SHIPPING_ADDRESS:
        return {
          ...state,
          shippingAddress: action.payload,
        }
      case CART_SAVE_PAYMENT_METHOD:
        return {
          ...state,
          paymentMethod: action.payload,
        }
      case CART_CLEAR_ITEMS:
        return {
          ...state,
          cartItems: [],
        }
      default:
        return state
    }
  }
