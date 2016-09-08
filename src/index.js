import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes';
import './index.css';
import store from './store'
import Cookies from 'js-cookie';
import xr from 'xr';
import actions from './actions'

function preRenderActions() {
  store.dispatch(actions.receiveConfig(require('./config/config')));
  validateAuth(renderApplication);
}

function validateAuth(callback) {
  const { token } = Cookies.getJSON('auth') || {};

  if (token) {
    const { apiUrl } = store.getState().config;
    const url = `${apiUrl}/api/users/me`;
    const headers = Object.assign({'Authorization': `Bearer ${token}`}, xr.defaults.headers);

    xr.get(url, {}, { headers })
      .then(
        (response) => {
          const user = response.data;
          store.dispatch(actions.receiveUser(user));
          callback();
        },
        () => {
          Cookies.remove('auth');
          callback();
        }
      );
  } else {
    callback();
  }
}

function renderApplication() {
  render(
    <Provider store={store}>
      {routes(store)}
    </Provider>,
    document.getElementById('root')
  )
}

preRenderActions();
