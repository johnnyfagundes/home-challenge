import React from 'react'
import { Box, Center, Container, NativeBaseProvider } from 'native-base'
import { Routes } from './src/routes'

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes/>
    </NativeBaseProvider>
  )
}
