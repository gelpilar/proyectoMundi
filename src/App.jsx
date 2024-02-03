import { Route, Routes } from "react-router-dom"
import { Home } from "./componentes/rutas/Home"
import { NoEncontrado } from "./componentes/rutas/noEncontrado"
import './estilos/estilo.css'
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />}></Route>
     </Routes>
    </>
  )
}

export default App
