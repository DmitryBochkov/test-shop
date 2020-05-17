import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Home} from './Component/Pages/Home';
import {Cart} from './Component/Pages/Cart';
import {MainNav} from './UI/Nav';

import "./index.css";
import "antd/dist/antd.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <MainNav />

        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Home />
      </div>
    </Router>
  );
}

export default App;
