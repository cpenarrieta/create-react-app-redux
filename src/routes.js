import React from 'react';
import { Router, browserHistory, IndexRedirect, Route } from 'react-router';
import App from './containers/layouts/App';
import ReportsViewContainer from './containers/ReportsViewContainer';
import LoginContainer from './containers/LoginContainer';

function requireAuth(nextState, replace, store) {
  const { username } = store.getState().auth.currentUser || {};
  if (!username) {
    replace({
      pathname: '/login',
      state: { nextPathName: nextState.location.pathname },
    });
  }
}

function redirectIfLoggedIn(replace, store) {
  const { username } = store.getState().auth.currentUser || {};
  if (username) {
    replace({ pathname: '/' });
  }
}

function routes(store) {
  return (
    <Router history={browserHistory}>
      <Route
        path="/"
        component={App}
        onEnter={(nextState, replace) => requireAuth(nextState, replace, store)}
      >
        <IndexRedirect to="/reports" />
        <Route
          path="/reports"
          component={ReportsViewContainer}
        />
      </Route>
      <Route path="/login" component={LoginContainer}
        onEnter={(nextState, replace) => redirectIfLoggedIn(replace, store) }
      />
    </Router>
  );
}

export default routes;
