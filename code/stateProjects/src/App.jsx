import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Nav/Header'
import Counter from './components/Counter'
import ChangeMode from './components/ChangeMode'

function App() {
  
  return (
    <>
      <ChangeMode/>
      <Counter/>
    </>
  )
}

export default App
