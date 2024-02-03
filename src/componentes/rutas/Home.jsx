import React, { useEffect, useState } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { Tarjeta } from '../auxiliares/Informacion/Tarjeta'
import { Clima } from '../auxiliares/Informacion/Clima';


export const Home =  () => {
    const [nombre1, setnombre] = useState("");
    const [val,setval]=useState(true)
    const cambiar = (nombre)=>
    {
      console.log("acaa")
        setnombre(nombre)
    }
    return (
      <>
      <Tarjeta funcion={cambiar} />
      
      </>
    )
  }
/*->Home
		-> tarjeta de informacion 
		-> tarjeta clima
		-> buscador
		-> boton aleatorio
        */