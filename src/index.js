import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import configureStore from '../src/redux/store';
import createRoutes from './routes';

const initialState = {}
const store = configureStore(initialState);
const routes = createRoutes(store);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          {routes}
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
