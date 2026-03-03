import { useState,StrictMode } from 'react'
import APIexec1 from './Components/APIexec1'
import Consultaendereco from './Components/ConsultaEndereco'
import APIexecRaposa from './Components/APIexecRaposa'
import Transportadora from './Components/Transportadora'
import GestaoProdutos from './Components/GestaoProdutos'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <StrictMode>
      <APIexec1 />
      <Consultaendereco />
      <APIexecRaposa />
      <Transportadora />
      <GestaoProdutos />
    </StrictMode>
      
    
  )
}

export default App
