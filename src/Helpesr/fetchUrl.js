import React from 'react'

export const fetchUrl= async (url)=> {
  try {
    const response = await fetch(url);
    const data = await response.json();
   
    console.log(response)
    
    return (
            {
                data:data,
                status:200
            }
        )
  } catch (err) {
    
    return (
        {

            data: err,
            status:500
        }
    )
  }
    
}
