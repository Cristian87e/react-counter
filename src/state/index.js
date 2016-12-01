/**
 * External dependencies
 */
 import thunkMiddleware from 'redux-thunk'
 import promiseMiddleware from 'redux-promise-middleware'
import { createStore, applyMiddleware, combineReducers } from 'redux'

/**
 * Internal dependencies
 */
import counterReducer from './counter/reducer'

export const reducers = combineReducers({
  counterReducer,
})

export const store = createStore(reducers, {}, applyMiddleware(
  thunkMiddleware,
  promiseMiddleware()
));
