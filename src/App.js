import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import FoodItem from './components/FoodItem/FoodItem';
import Foods from './components/Foods/Foods';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Header />
          <Banner />
          <Foods />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
