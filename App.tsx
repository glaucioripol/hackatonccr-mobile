import React from 'react'
import { StatusBar } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { store, persistor } from './src/redux'
import { Routes } from './src/routes'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="default" translucent />
        <Routes />
      </PersistGate>
    </Provider>
  )
}
