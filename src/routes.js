import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";


import Layout from './components/layout/layout';
import Home from './components/pages/home';
import Categories from './components/pages/categories';
import Testimonials from './components/pages/testimonials';

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

      <Route path="/testimonial">
        <Layout>
          <Testimonials />
        </Layout>
      </Route>

    </Switch>
  );
}
