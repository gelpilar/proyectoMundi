import { Route, Routes } from "react-router-dom"
import { Home } from "./componentes/rutas/Home"
import { NoEncontrado } from "./componentes/rutas/noEncontrado"

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/noEncontrado" element={<NoEncontrado />}></Route>
     </Routes>
    </>
  )
}

export default App
