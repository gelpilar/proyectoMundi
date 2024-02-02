import React, { useEffect, useState } from 'react'
import { fetchUrl } from '../Helpesr/fetchUrl'

export const useFetch = (url) => {
    const [data, setdata] = useState([])
    const [status, setstatus] = useState(500)
    const getData= async()=>
    {
        const {data,status}= await fetchUrl(url);
        setdata(data);
        setstatus(status);
    }
    useEffect(()=>{getData()
    },[url])
    return {data:data,status:status}
   
       
    
    
}

