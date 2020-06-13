import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../saga'
import { IInformationCrud, crudInformationReducer } from './information'

export interface AppState {
  information: IInformationCrud
}

export const reducers = combineReducers<AppState>({
  information: crudInformationReducer,
})

// export function createAppStore() {
//   const sagaMiddleware = createSagaMiddleware()

//   const composeEnhancers = compose

//   const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

//   sagaMiddleware.run(rootSaga)

//   return { store }
// }

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = compose

export const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
