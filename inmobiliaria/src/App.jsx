import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages'
import InicioLayout from './layouts/inicioLayout'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto.jsx'
import Arrendar from './pages/Arrendar'
import Comprar from './pages/Comprar'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioLayout/>}>
          <Route index element={<Inicio/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/arrendar' element={<Arrendar/>} />
          <Route path='/comprar' element={<Comprar/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
