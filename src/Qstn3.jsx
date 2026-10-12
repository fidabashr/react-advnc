import axios from 'axios';
import {useState,useEffect} from 'react'
function App(){
const [users,setUsers]=useState([])
useEffect(()=>{

    axios.get('http://localhost:3000/users')
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
},[])

async function del(id){
   await axios.delete(`http://localhost:3000/users/${id}`)
setUsers(users.filter((user)=>user.id!==id));


}
return(
    <div>
        {users.map((user)=>(<li ><br/>{user.name}        
        <button onClick={()=>del(user.id)}>Delete</button> 
        </li>))}
    </div>

)
}
export default App