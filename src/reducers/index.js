import { combineReducers } from 'redux';
import config from './config';
import headerNav from './headerNav';
import auth from './auth';

const chelaVipApp = combineReducers({
  config,
  headerNav,
  auth
});

export default chelaVipApp
