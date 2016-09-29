import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

//import pollApp from './reducers/index';
import pollReducer from './reducers/pollReducer';

const logger = createLogger();
const store = createStore(
  pollReducer,
  applyMiddleware(thunk, promise, logger)
);

export default store;
