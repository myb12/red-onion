import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Checkout from './components/Checkout/Checkout';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Search from './components/Search/Search';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {

  return (
    <AuthProvider>
      <CartContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Banner />
              <Foods />
            </Route>

            <Route path="/food/:foodId">
              <FoodDetails />
            </Route>

            <Route path="/search=:query">
              <Banner />
              <Search />
            </Route>

            <Route path="/login">
              <SignUp />
            </Route>

            <PrivateRoute path="/checkout">
              <Checkout />
            </PrivateRoute>

          </Switch>
        </Router>
      </CartContextProvider>
    </AuthProvider>
  );

}

export default App;
