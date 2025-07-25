import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/Approuter.jsx'
import Resources from './Components/Resources/Resources.jsx'
import Filtre from './Components/Filtre/filtre.jsx'
import Contribute from './Components/Contribute/Contribute.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

import Footerdoc from "./Components/Footerdoc/Footerdoc";
import './App.css'

function App() {
  return (
    //<Footerdoc/>
     <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
