import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Inicio from './Pages/Inicio'
import Training from './Pages/Training'

import Leccion1 from './Components/Leccion1'
import Leccion2 from './Components/Leccion2'
import Leccion3 from './Components/Leccion3'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='*' element={<Inicio/>} />
          <Route path='/VictorFisioFit' element={<Inicio/>} />
          <Route path='/VictorFisioFit/Training' element={<Training/>} />

          <Route path='/VictorFisioFit/Training/Leccion1' element={<Leccion1/>} />
          <Route path='/VictorFisioFit/Training/Leccion2' element={<Leccion2/>} />
          <Route path='/VictorFisioFit/Training/Leccion3' element={<Leccion3/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
