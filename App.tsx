import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './src/redux'
import { Routes } from './src/routes'

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="default" translucent />
      <Routes />
    </Provider>
  )
}
