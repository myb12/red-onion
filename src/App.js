import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
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
        </Switch>
      </Router>
    </CartContextProvider>
  );

}

export default App;
