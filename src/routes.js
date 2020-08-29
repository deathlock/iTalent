import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Home from './components/pages/home';
import Layout from './components/layout/layout';
import Categories from './components/pages/categories';

export default () => {
  return (
    <Switch>

      <Route exact path="/">
        <Layout>
          <Home />
        </Layout>
      </Route>

      <Route path="/categories">
        <Layout>
          <Categories />
        </Layout>
      </Route>

    </Switch>
  );
}
