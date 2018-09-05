import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from './types'
import { planetsRequest, planetsError, planetsSuccess } from './actions'

function* planetsGetSagaWorker() {
  yield put(planetsRequest())

  try {
    const planets = yield call(() => {
      return fetch('https://swapi.co/api/planets/').then(result => result.json())
    })

    yield put(planetsSuccess(planets))
  } catch (error) {
    yield put(planetsError(error))
  }
}

function* planetsGetSagaWatcher() {
  yield takeLatest(types.PLANETS_GET_SAGA, planetsGetSagaWorker)
}

export default planetsGetSagaWatcher
