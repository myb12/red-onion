import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Header />
          <Banner />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
