import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';
import rootEpics from './rootEpics';

const epicMiddleware = createEpicMiddleware(rootEpics);
const Middleware = [thunkMiddleware, epicMiddleware];

let superCompose = compose;

if (process.env.NODE_ENV !== 'production') {
  Middleware.push(createLogger());
  // This allows us to support the REDUX DevTools Extension, but not all browsers support it
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    superCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  } else {
    superCompose = v => {
      return v;
    };
  }
}

const configureStore = () =>
  createStore(rootReducer, superCompose(applyMiddleware(...Middleware)));

export default configureStore();
