import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/Approuter.jsx'
import Resources from './Components/Resources/Resources.jsx'
import Filtre from './Components/Filtre/filtre.jsx'
import './App.css'

function App() {
  return (
    
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
