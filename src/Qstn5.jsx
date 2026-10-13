import {useState,useEffect} from 'react';
import axios from 'axios'
function App(){
const [users,setUsers]=useState([])
useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
},[])
async function Inc(id,age){
    let newage=Number(age)+1
   
    await axios.patch(`http://localhost:3000/users/${id}`,{age:newage})
 setUsers(users=>users.map((user)=>id===user.id?{...user,age:newage}:user))
}
return(
    <>
    {users.map((user)=><li key={user.id}>{user.name}-{user.age}
        <button onClick={()=>Inc(user.id,user.age)}>Increase </button>
    </li>)}
    </>
)

}
export default App