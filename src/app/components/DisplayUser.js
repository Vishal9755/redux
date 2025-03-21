 "use client"
 import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../reduxrtk/slice";
 export default function DisplayUsers(){
    
    //users:- form slice.js
    const userData=useSelector((data)=>{
        return data=data.userData.users        
    })
    const dispatch=useDispatch();

    
    // console.log(userData);
    return(
        <header className="display-user">
              
            <h2>Display Users</h2>
            
            {
                userData.map((item,index)=>(
                    <div className="div">
                        <span><h3>{item.name}</h3></span>
                        {/* <button onClick={()=>dispatch(removeUser(item.id))}>remove</button> */}
                        
                    </div>
                ))
            }
        </header>
    )
}