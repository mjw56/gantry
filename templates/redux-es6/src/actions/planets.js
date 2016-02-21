import * as types from '../constants/ActionTypes'

export function fetchPlanets(url) {
  return {
    type: [
      types.FETCH_PLANETS_REQUEST,
      types.FETCH_PLANETS_SUCCESS,
      types.FETCH_PLANETS_FAILURE
    ],
    request: true,
    url: url
  };
}
