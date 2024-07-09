import { useState } from 'react'
import './App.css'
import Demo from './demo'

function App() {
  const name="Arth";
  return (
    <>
    <Demo/>
    <h1>Hello {name}</h1>
    <p>test</p>
    </>
  )
}

export default App

