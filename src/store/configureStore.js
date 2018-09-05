import { createStore } from 'redux'
import reducer from 'reducers/index'
import createSagaMiddleWare from 'redux-saga'
import { applyMiddleware } from 'redux'
import sagas from 'sagas/sagas'

const saga = createSagaMiddleWare()
const middleWare = [saga]
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWare)
)

saga.run(sagas)
