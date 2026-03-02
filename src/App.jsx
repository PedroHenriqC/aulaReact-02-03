import { useState,StrictMode } from 'react'
import APIexec1 from './Components/APIexec1'
import Consultaendereco from './Components/ConsultaEndereco'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <StrictMode>
      <APIexec1 />
      <Consultaendereco />
    </StrictMode>
      
    
  )
}

export default App
