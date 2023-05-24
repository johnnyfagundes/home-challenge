import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { Routes } from './src/routes'
import { Provider } from 'react-redux'
import { store } from './src/app/store'

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Routes/>
      </NativeBaseProvider>
    </Provider>
  )
}
