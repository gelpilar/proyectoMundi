import React, { useEffect, useState } from 'react'
import { useFetch } from '../../../Hooks/useFetch'
import { Clima } from './Clima'



export const Tarjeta =({funcion}) => {

    const [objetoMuestra,setObjeto]=useState(
        {
      nombre: "nombre Pais",
      bandera: "https://us.123rf.com/450wm/yupiramos/yupiramos1802/yupiramos180209245/95183979-planeta-tierra-mundo-globo-mapa-icono-ilustraci%C3%B3n-vectorial-dibujo-imagen.jpg",
      area:0,
      capital: "capital"
    }
    )
    
  
   
      const {data,status}=  useFetch('https://restcountries.com/v3.1/all/?fields=translations,capital,area,flags')
     

      const num= Math.floor(Math.random() * 251);
      
    useEffect(()=>{
        if(status!==500)
        {
            const nuevo= {
                nombre: data[num]?.translations.spa.official,
                bandera: data[num].flags.png,
                area: data[num].area,
                capital: data[num].capital
            }
            setObjeto(nuevo)
           
            funcion(nuevo.capital)
        
        }else{
            console.log("errro")
        }
        
    },[data,status])

    
    return (
      <>
      <span className='tarjeta'>
            <h1>{objetoMuestra.nombre}</h1>
            <img srcSet={objetoMuestra.bandera} alt="" srcset="" />
            <ul>
                <li>area: {objetoMuestra.area}</li>
            </ul>
            <p>Capital: {objetoMuestra.capital}</p>
      </span>
      </>
    )
  }