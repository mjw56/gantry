import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import apiMiddleware from '../middleware/apiMiddleware';
import promiseMiddleware from '../middleware/promiseMiddleware';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer, 
    initialState,
    compose(
      applyMiddleware(
        apiMiddleware,
        promiseMiddleware
      ),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}