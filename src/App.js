import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import {Home} from './Component/Pages/Home';
import {Cart} from './Component/Pages/Cart';
import {Header} from './UI/Header';
import {Sidebar} from './UI/Sidebar';
import {Footer} from './UI/Footer';

import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="App-content">
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
