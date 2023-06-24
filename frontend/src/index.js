import React, { Suspense } from 'react';
import ReactDOM from 'react-dom'
// Translation Config
import './translateConfig'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
// import 'bootstrap/dist/css/bootstrap.min.css'

/*The rendered content is wrapped with the Provider component from the react-redux library. The Provider component 
makes the Redux store available to all components in the application.
Inside the Provider component, the Suspense component is used. The Suspense component is a built-in component in
React that allows you to show a fallback content while waiting for asynchronous code to load. In this case, the fallback content is set to "...loading".*/
ReactDOM.render(
  <Provider store={store}>
  <Suspense fallback="...loading">
            <App />
        </Suspense>
  </Provider>,
  document.getElementById('root')
)
/*In JavaScript, the `...` (three dots) is called the spread syntax or the rest syntax, depending on how it is used. Its behavior varies depending on the context in which it is used.

1. Spread Syntax:
   - When used in front of an iterable (such as an array or a string), it expands or spreads the elements of the iterable into individual elements.
   - It is commonly used to create a new array or object by combining existing arrays or objects with additional elements or properties.
   - Example usage:
     const numbers = [1, 2, 3];
     const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

2. Rest Syntax:
   - When used in a function declaration or function expression, it allows a variable to accept multiple arguments as an array. It collects the remaining arguments into an array.
   - It is commonly used when the number of arguments passed to a function is unknown or can vary.
   - Example usage:
     function sum(...numbers) {
       return numbers.reduce((total, num) => total + num, 0);
     }

     console.log(sum(1, 2, 3, 4, 5)); // Output: 15 */

