import * as types from '../constants/ActionTypes'

export function fetchPlanets(url) {
  return {
    types: [
      types.FETCH_INFO_REQUEST,
      types.FETCH_INFO_SUCCESS,
      types.FETCH_INFO_FAILURE
    ],
    request: true,
    url: url
  };
}
