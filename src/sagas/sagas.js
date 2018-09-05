import { fork, all } from 'redux-saga/effects'
import planetsGetSagaWatcher from 'reducers/Planets/saga'

const sagas = [planetsGetSagaWatcher]

export default function* root() {
  yield all(sagas.map(saga => fork(saga)))
}
