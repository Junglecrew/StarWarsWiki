import * as types from './types'

const initialState = {
  planets: [],
  count: 1,
  isFetching: false,
  error: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PLANETS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case types.PLANETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        planets: payload.results,
        count: payload.count,
      }
    case types.PLANETS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: payload,
        planets: [],
      }
    default: {
      return state
    }
  }
}
