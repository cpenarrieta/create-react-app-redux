import * as config from './config';
import * as headerNav from './headerNav';
import * as auth from './auth';

const actions = Object.assign({},
  config,
  headerNav,
  auth
);

export default actions;
