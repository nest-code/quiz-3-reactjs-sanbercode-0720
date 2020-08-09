import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home  from '../Component/Home';    // Halaman Home
import About from '../Component/About';  // Halaman About

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
          <Home />
      </Route>

      <Route path="/about">
          <About />
      </Route>

    </Switch>
  )

}

export default Router;
