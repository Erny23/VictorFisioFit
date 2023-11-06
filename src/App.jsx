import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Inicio from './Pages/Inicio'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='*' element={<Inicio/>} />
          <Route path='/VictorFisioFit' element={<Inicio/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
