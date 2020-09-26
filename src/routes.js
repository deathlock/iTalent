import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";


import Layout from './components/layout/layout';
import Home from './components/pages/home';
import Categories from './components/pages/categories';
import Testimonials from './components/pages/testimonials';
import Login from './components/pages/login';
import Register from './components/pages/register';
import FindTalent from './components/pages/findTalent';
import Talent from './components/pages/talent';
import UpdateProfile from './components/pages/updateProfile';
import LoginAuth from './components/layout/loginAuth';
import LogoutAuth from './components/layout/logoutAuth';
import Team from './components/pages/team';

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


      <Route path="/talent">
        <Layout>
          <Talent />
        </Layout>
      </Route>
      
      <Route path="/team">
        <Layout hasNavigator={false}>
          <Team />
        </Layout>
      </Route>

      <Route path="/update-profile">
        <LoginAuth>
          <Layout hasNavigator={false}>
            <UpdateProfile />
          </Layout>
        </LoginAuth>
      </Route>

      <Route path="/login">
        <LogoutAuth>
          <Login />
        </LogoutAuth>
      </Route>

      <Route path="/register">
        <LogoutAuth>
          <Register />
        </LogoutAuth>
      </Route>

      <Route path="/find-talent">
        <FindTalent />
      </Route>

    </Switch>
  );
}
