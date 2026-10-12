// import {useState,useEffect} from 'react';
// function App(){
//     const [data,setData]=useState([])
//     useEffect(()=>{
//         fetch('http://localhost:3000/users')
//         .then(res=>res.json())
//         .then(dt=>setData(dt))
//         .catch(err => console.log(err));
//     },[])
//     return ( 
//         <div>
//             {data.map((user)=>(<p key={user.id}>{user.name} ,{user.email}</p>))}
//         </div>
//     )
    
// }
// export default App
import { useState,useEffect } from "react";
import axios from 'axios';
function App(){
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
        
    },[])
    return(
        <div>
            {data.map((user)=>(<p key={user.id}>{user.name}-{user.email}</p>))}
        </div>
    )
}
export default App