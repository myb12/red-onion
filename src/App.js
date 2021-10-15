import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Banner />
          <Foods />
        </Route>

        <Route path="/food/:foodId">
          <FoodDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
