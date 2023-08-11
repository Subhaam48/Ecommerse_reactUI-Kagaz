import axios from "axios";
import React, { createContext, useEffect, useState } from "react";


let UserData=createContext()

const ContextFetch=({children})=>{
    const[input,Setinput]=useState([])

    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((response)=>{
            console.log(response);
            return Setinput(response.data.products)
        }
        )
    },[])

    return(
       
        <UserData.Provider value={input} >
               
     {children}
     

        </UserData.Provider>
    )

}
export default ContextFetch
export{UserData}