import {
  FETCH_PLANETS_REQUEST,
  FETCH_PLANETS_SUCCESS
} from '../constants/ActionTypes';
import { fromJS } from 'immutable';

const initialState = { isFetching: false, planets: [] }

export default function todos(state = initialState, action) {
  switch (action.type) {
  case FETCH_PLANETS_SUCCESS:
    return fromJS({
      isFetching: false,
      planets: action.data
    })

  default:
    return fromJS(state)
  }
}