import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import billboard from './reducers/Billboard';

export const store = createStore(combineReducers({
    billboard
}), applyMiddleware(thunk, createLogger({})));
