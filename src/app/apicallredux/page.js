"use client"

import { useDispatch, useSelector } from "react-redux"
import { fetchApiData } from "../reduxrtk/slice"
import { useEffect } from "react"

export default function Page(){
    const dispatch=useDispatch()
   const apiUserData=useSelector((data)=>data.userData.userApiData)
   console.log(apiUserData);
useEffect(()=>{
    dispatch(fetchApiData())
},[])
   
    return(
        <div>
            <h1>Api Calling Redux</h1>
            {/* <button onClick={()=>dispatch(fetchApiData())}>Load Users</button> */}
            {
                apiUserData.length && apiUserData.map((item)=>(
                   
                        <h3>{item.firstName}</h3>
                    
                ))
            }
        </div>
    )
}