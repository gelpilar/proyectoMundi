import React, { useEffect, useState } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { Tarjeta } from '../auxiliares/Informacion/Tarjeta'
import { Clima } from '../auxiliares/Informacion/Clima';


export const Home =  () => {
    const [nombre1, setnombre] = useState("");
    const [val,setval]=useState(true)
    const cambiar = (nombre)=>
    {
        setnombre(nombre)
    }
    return (
      <>
      <Tarjeta funcion={cambiar} />
      <Clima nombre={nombre1===""? "Buenos aires" : nombre1} />
      
      </>
    )
  }
/*->Home
		-> tarjeta de informacion 
		-> tarjeta clima
		-> buscador
		-> boton aleatorio
        */