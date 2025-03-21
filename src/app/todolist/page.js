"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodos } from "../reduxrtk/todoslice"

export default function Page(){
    const [todo,setTodo]=useState("")
    const todoData=useSelector((data)=>data.todosData.todos)
    // console.log(todoData);
    
    const dispatch=useDispatch()
    return(
        <div>
            <h1>Add ToDo List</h1>
            <input onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="add Your task"/>
            <button onClick={()=>dispatch(addTodos(todo))}>Add Todo</button>
            <h4>Todo List</h4>
            {
                todoData.length && todoData.map((item,index)=>(
                    <div key={index}>
                        <h3>{item.name}</h3>
                        </div>
                ))
            }
        </div>
    )
}