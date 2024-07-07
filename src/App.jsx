
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { Comun } from './pages/comunidad'
import { Pay } from './pages/zonaplay'
import { Docu } from './pages/documentos'
import { Circu } from './pages/ciculares'
import { Noso } from './pages/Nosotros'
import { Admi } from './pages/Abministracion'
import { Convi } from './pages/comitedeconv'
import { Consejo } from './pages/consejo'
import { Combo } from './pages/combocatorias'
import { Tras } from './pages/trasporte'
import { Empredi } from './pages/emprendimientos'
import { Clases } from './pages/clases'
import { Futbol } from './pages/futbol'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Comunidad' element={<Comun/>} />
        <Route path='/ZonaDePago' element={<Pay/>} />
        <Route path='/Documentos' element={<Docu/>} />
        <Route path='/Circulares' element={<Circu/>} />
        <Route path='/Nosotros' element={<Noso/>} />
        <Route path='/Administracion' element={<Admi/>} />
        <Route path='/Convivencia' element={<Convi/>} />
        <Route path='/Consejo' element={<Consejo/>} />
        <Route path='/Combocatorias' element={<Combo/>} />
        <Route path='/Trasporte' element={<Tras/>} />
        <Route path='/Emprendimientos' element={<Empredi/>} />
        <Route path='/Clases-aerobicas' element={<Clases/>} />
        <Route path='/Futbol' element={<Futbol/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
