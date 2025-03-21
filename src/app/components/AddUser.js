"use client"

import { useState } from "react"
import { addUsers } from "../reduxrtk/slice"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"


export default function AddUsers(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const dispatch= useDispatch()
    const userDispatch=()=>{
        // console.log(name);
        dispatch(addUsers(name))
       
       
    }
    
    return(
        <header className="add-user">
            <h2>Add Users</h2>
            <input 
            onChange={(e)=>setName(e.target.value)}
            className="add-user-input" type="text" placeholder="enter user name"/>
           
            <button onClick={userDispatch} className="add-user-btn">Add User</button>
            <Link href='/removeuser'>Remove User</Link>
            <br/>
            <Link href='/todolist'>Todo List</Link>
            <br/>
            <Link href='/apicallredux'>User Api Data</Link>
        </header>
    )
}