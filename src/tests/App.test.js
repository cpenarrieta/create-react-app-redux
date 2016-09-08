import React from 'react';
import ReactDOM from 'react-dom';
import HeaderNavContainer from '../containers/HeaderNavContainer';
import store from '../store'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderNavContainer store={store} />, div);
});

it('sums numbers', () => {
  expect(1 + 2).toEqual(3);
  expect(2 + 2).toEqual(4);
});
