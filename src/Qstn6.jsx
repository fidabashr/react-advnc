import {useEffect,useState} from 'react'
import axios from 'axios'
function App(){
const [users,setUsers]=useState([])
const [page,setPage]=useState(1)
const perPage=2
useEffect(()=>{
 axios.get('http://localhost:3000/users')
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
},[])
const totalPage=Math.ceil(users.length/perPage)
const start=(page-1)* perPage;
const pageusers=users.slice(start,start+perPage)
return(
    <div>
        {pageusers.map(user=>(<p key={user.id}>{user.name}</p>))}
        <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <p>Page {page} of {totalPage}</p>
         <button disabled={page>=totalPage} onClick={()=>setPage(page+1)}>Next</button>
        
    </div>
)

}
export default App