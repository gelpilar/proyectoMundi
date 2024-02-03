import React, { useEffect, useState } from 'react'
import { useFetch } from '../../../Hooks/useFetch'
import { fetchUrl } from '../../../Helpesr/fetchUrl'
import "../../../estilos/clima.css" 
import r from "./r.png"
import climaI from "./clima.png"
export const Clima = ({nombre}) => {
    const [clima,setClima]= useState({
        nombre:"nombre",
        temp:0,
        descripcion:"no pudimos encontrar",
        ico: climaI
    })


    const clickear = async ()=>
    {
        const nuevo= await clicker();
        setClima(nuevo)
        console.log(nuevo)
    }
    const clicker= async()=>
    {
   

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nombre}&appid=e7ae586051eb4b986d35b62bf6096e01`);
        const data = await response.json(); 
    if(data.code!==404)
    {
        
        const nuevo= {
            nombre:data.name,
            temp:parseInt(parseInt(data.main.temp) -273),
            descripcion:data.weather[0].description ,
            ico:`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
          
         }
       
         
       
         
         return nuevo
    }else
    {
        return {
            nombre:"nombre",
            temp:0,
            descripcion:"no pudimos encontrar",
            ico:"data:image/png;base64,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"
        }
    }
     
    
}
 
    return (
    <>
    <section className='climaCuer'>
    <span className='clima'>
    <h4>{clima.temp}°</h4>
<h4>Descripcion: {clima.descripcion}</h4>
<img  className="ima" srcset={clima.ico} alt="Weather Icon" />

<button onClick={clickear}>
 <img className="im" src={r} alt="" />
</button>
    </span>
    </section>
    
    </>
  )
}
