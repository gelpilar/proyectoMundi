import React, { useEffect, useState } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { Tarjeta } from '../auxiliares/Informacion/Tarjeta'
import { Clima } from '../auxiliares/Informacion/Clima';
import { Buscador } from '../auxiliares/Buscador';
import '../../estilos/home.css'
import alea from "./alea.png"


export const Home =  () => {
    const [nombre1, setnombre] = useState("");
    const [num,setNum]= useState(Math.floor(Math.random() * 251))

    const cambiar = (nombre)=>
    {
      console.log("acaa")
        setnombre(nombre)
    }
    const aleatorio= ()=>
    {
      const vari= Math.floor(Math.random() * 251)
      setNum(vari)
    }
    return (
      <>
      <section>
      <Buscador funcion={cambiar}/>
      <section>
      <Tarjeta  num={num} nombre={nombre1}/>
      <button className="aleatorio" onClick={aleatorio}>
        <img className="im"src={alea} alt="" srcset="" />
      </button>
      </section>
      </section>
     
      
      </>
    )
  }
/*->Home
		 <section>
      <Tarjeta  num={num} nombre={nombre1}/>
      
      </section>
        */