import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import Footer from './components/Footer'
import CategoryDetails from './screens/CategoryDetails'
import SettingsScreen from './screens/settingsScreen'
import Register from './screens/Register'
import SubCategoryDetails from './screens/SubCategoryDetails'
import ProductScreen from './screens/ProductScreen'
import Login from './screens/Login'
import CartScreen from './screens/CartScreen'
import Shipping from './screens/Shipping'
import Payment from './screens/Payment'
import OrderScreen from './screens/OrderScreen'
import MyOrders from './screens/MyOrders'
import AdminOrders from './screens/AdminOrders'
import OrderDetails from './screens/OrderDetails'
import AdminProducts from './screens/AdminProducts'
import AdminUsers from './screens/AdminUsers'
import ProductCreate from './screens/ProductCreate'
import ProductEdit from './screens/ProductEdit'
import UserAccountScreen from './screens/UserAccountScreen'

/*The Switch component is used to render the routes within the application. It ensures that only one route is rendered at a time by 
matching the current URL to the specified paths.
Multiple Route components are defined within the Switch component. Each Route component represents a specific route in the application
and specifies the path and component to render when the URL matches that path.
The exact attribute is used for the routes that require an exact match of the URL path.*/

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route
          path='/categories/:categoryName'
          exact
          component={CategoryDetails}
        />
        <Route
          path='/category/:subcategoryName'
          exact
          component={SubCategoryDetails}
        />
        <Route
          path='/category/:subcategory/:brand/:id'
          component={ProductScreen}
          exact
        />
        <Route path='/login' component={Login} exact />
        <Route path='/register' component={Register} exact />
        <Route path="/settings" component={SettingsScreen} exact />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/shipping' component={Shipping} />
        <Route path='/payment' component={Payment} />
        <Route path='/placeorder' component={OrderScreen} />
        <Route path='/myorders/:id' component={MyOrders} />
        <Route path='/admin/allOrders' exact component={AdminOrders} />
        <Route path='/orderDetails/:id' component={OrderDetails} />
        <Route path='/admin/allProducts' exact component={AdminProducts} />
        <Route path='/admin/allUsers' exact component={AdminUsers} />
        <Route path='/admin/ProductCreate' exact component={ProductCreate} />
        <Route path='/admin/ProductEdit/:id' exact component={ProductEdit} />
        <Route path='/my-account/:id' exact component={UserAccountScreen} />
      </Switch>
       <Footer />
       </Router>
  )
}

export default App
