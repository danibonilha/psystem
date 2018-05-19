import initialState from './initialState';
import {FETCH_DATA, RECEIVE_DATA, FETCH_DATA_FAIL } from '../actions/actionsTypes';

export default (state = initialState.home, action)  => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true, error: '' };
    case RECEIVE_DATA:
      return { ...state, starships: action.payload, loading: false };
    case FETCH_DATA_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}