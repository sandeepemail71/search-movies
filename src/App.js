import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from './components/Header'
import './App.css';
import DashBoard from './components/DashBoard';

function App({ history }) {
  const [navItem, setNavItem] = useState('home');
  return (
    <div className="App">
      <Router>
        <Header
          navItem={navItem}
          setNavItem={setNavItem}
          history={history}
        />
        <Switch>
          <Route
            exact
            path="/home"
            render={(props) => (
              <DashBoard history={history} />
            )}
          />
          <Route
            exact
            path="/movies"
            render={(props) => (
              <h1>Hi movies</h1>
            )}
          />
          <Route
            exact
            path="/tv-shows"
            render={(props) => (
              <h1>Hi tv shows</h1>
            )}
          />
          <Redirect exact from="/" to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
