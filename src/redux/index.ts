import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

import { rootSaga } from '../saga'

import { authReducer, IAuthState } from './auth'
import { crudInformationReducer, IInformationCrud } from './information'

export interface AppState {
  auth: IAuthState
  information: IInformationCrud
}

function getReducers() {
  return combineReducers<AppState>({
    auth: authReducer,
    information: crudInformationReducer,
  })
}

function createAppStore() {
  const reducers = getReducers()

  const sagaMiddleware = createSagaMiddleware()

  const persistConfig = {
    key: 'root',
    whitelist: ['auth'],
    storage: AsyncStorage,
  }

  const persistedReducer = persistReducer(persistConfig, reducers)

  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}

export const { store, persistor } = createAppStore()
