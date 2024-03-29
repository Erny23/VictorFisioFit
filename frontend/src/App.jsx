import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ProtectedRoutes from './Components/Auth/protectedRoutes'
import Inicio from './Pages/Inicio'
import Training from './Pages/Training'
import Productos from './Pages/Productos'
import Nosotros from './Pages/Nosotros'
import Contactos from './Pages/Contactos'
import Sesion from './Pages/Sesion'
import Error from './Pages/Error'

import Leccion1 from './Components/Leccion1'
import Leccion2 from './Components/Leccion2'
import Leccion3 from './Components/Leccion3'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='*' element={<Error/>} />
          <Route path='/VictorFisioFit' element={<Inicio/>} />
          <Route path='/VictorFisioFit/Sesion' element={<Sesion/>} />
          <Route path='/VictorFisioFit/Nosotros' element={<Nosotros/>} />
          <Route path='/VictorFisioFit/Contactos' element={<Contactos/>} />

          <Route path='/VictorFisioFit' element={<ProtectedRoutes />}>

            <Route path='/VictorFisioFit/Training' element={<Training/>} />
            <Route path='/VictorFisioFit/Productos' element={<Productos/>} />

            <Route path='/VictorFisioFit/Training/Leccion1' element={<Leccion1/>} />
            <Route path='/VictorFisioFit/Training/Leccion2' element={<Leccion2/>} />
            <Route path='/VictorFisioFit/Training/Leccion3' element={<Leccion3/>} />
            
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
