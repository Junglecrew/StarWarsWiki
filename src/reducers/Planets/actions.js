import * as types from './types'

export const planetsGetSaga = () => ({
  type: types.PLANETS_GET_SAGA,
})

export const planetsRequest = () => ({
  type: types.PLANETS_REQUEST,
})

export const planetsSuccess = payload => ({
  type: types.PLANETS_SUCCESS,
  payload,
})

export const planetsError = payload => ({
  type: types.PLANETS_ERROR,
  payload,
})
