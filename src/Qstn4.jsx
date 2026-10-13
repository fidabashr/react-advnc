import axios from 'axios'
import {useState,useEffect} from 'react'
function App(){
const [users,setUsers]=useState([]);
useEffect(()=>{
axios.get('http://localhost:3000/users')
.then(res=>setUsers(res.data))
},[])
async function edit(id){
    const val={
        name:"aleena",
        age:23,
        email:"aleena@gmail.com"
    }
const res=await axios.put(`http://localhost:3000/users/${id}`,val)
setUsers(users=>users.map((user)=>id===user.id?res.data:user))
}
return(
    <>
    {users.map((user)=>(<li key={user.id}><br/>{user.name}
        <button onClick={()=>edit(user.id)}>Edit</button>
    </li>))}
    </>

)
}
export default App