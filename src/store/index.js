import { createStore, applyMiddleware } from 'redux';
import DevTools from '../DevTools';
import { createLogger } from 'redux-logger';
import reducers from '../reducers/index';

const logger = createLogger();
const store = createStore(
    reducers,
    applyMiddleware(logger),
    DevTools.instrument()
);

export default store;