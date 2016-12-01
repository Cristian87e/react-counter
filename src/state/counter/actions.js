/**
 * External dependencies
 */
import { createActions } from 'redux-actions';
/**
 * Internal dependencies
 */
import { COUNTER } from '../action-types'
/**
 * Actions Definition
 */
export const increment = createActions(COUNTER.INCREMENT)
export const decrement = createActions(COUNTER.DECREMENT)
/**
 * Thunks Definition
 */
export const incrementIfOdd = () => {
  return (dispatch, getState) => {
    const { counter } = getState()
    if (counter.value % 2) {
      dispatch(increment())
    }
  }
}
export const incrementAsync = () => {
  return (dispatch) => {
    setTimeout(
      () => dispatch(increment()),
      2000
    )
  }
}
