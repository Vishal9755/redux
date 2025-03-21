"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../reduxrtk/slice";

export default function Page(){
    const userData=useSelector((data)=>{
return data.userData.users
    })
    console.log(userData);
    const dispatch=useDispatch();
    return(
        <div className="display-user">
            <h1>
                Remove User Page
                {
                    userData.map((item)=>(
                        <div className="add-user-input" >
                            <span>{item.name}</span>
                            <button className="div" onClick={()=>dispatch(removeUser(item.id))}>Remove User</button>
                        </div>
                    ))
                }
            </h1>
        </div>
    )
}