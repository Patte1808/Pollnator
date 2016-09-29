import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import pollApp from './reducers/index';

const logger = createLogger();
const store = createStore(
  pollApp,
  applyMiddleware(thunk, promise, logger)
);

export default store;
