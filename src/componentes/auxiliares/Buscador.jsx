import React, { useState } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { Home } from '../rutas/Home'
import { Clima } from './Informacion/Clima'
import "../../estilos/Buscador.css"

export const Buscador = ({funcion}) => {
    const [first, setfirst]= useState("")
    const [nombre,setnombre]=useState("");
    const cambiar =(e)=>
    {
        setfirst(e.target.value)
    }

    const funcionApi= async(e)=>
    {
        
        e.preventDefault();
        const encodedValue = encodeURIComponent(first);
        const response = await fetch(`https://restcountries.com/v3.1/name/${encodedValue}/?fields=translations,capital,area,flags`);
        const data = await response.json(); 
      
        if(response.status===200)
        {
            console.log(data)
            setnombre(data[0].capital)
        }
    }

  return (
    <>
    <section className='cuerpo'>
       
       
        <span>
        <h2>{nombre}</h2>
        <Clima nombre={nombre}/> 
        </span>
        <span>
        <form onSubmit={(e)=>funcionApi(e)} method="post">
            <input type="search" value={first} onChange={cambiar}/>
            </form>
        </span>
    </section>
        
        
    
    </>
  )
}

/**<h2>{nombre}</h2>
        <Clima nombre={nombre}/> */