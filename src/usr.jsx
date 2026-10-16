import { useNavigate,useParams,BrowserRouter,Routes,Route ,Link} from "react-router-dom";
const users = [
  { id: 1, name: "Amina" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Maya" }
];
function User(){
return(
    <div> <ul>{users.map((user)=>(<li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>))}</ul>
</div>)
   
}
function UserList(){
const {id}=useParams()
const nav=useNavigate()
const user=users.find((usr)=>usr.id===Number(id))
function prev(){
    if(Number(id)>1){
        nav(`/user/${Number(id)-1}`)
    }
}
return(
    <div>
        <h2>{user.id}</h2>
        <h1>{user.name}</h1>
        <button onClick={()=>nav(-1)}>Home</button>
        <button onClick={prev}>Prev</button>
    </div>
)
}
function App(){
    return(
<BrowserRouter>
<Routes>
    <Route path="/user" element={<User/>}/>
    <Route path="/user/:id" element={<UserList/>}/>

</Routes>
</BrowserRouter>
    )

}
export default App