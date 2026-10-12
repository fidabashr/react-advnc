import axios from 'axios'

import {useState} from "react";
function App(){
const [form,setForm]=useState({
    name:"",
    age: "",
    email:""

})
function handle(event){
event.preventDefault()
}
function Send(){
    axios.post('http://localhost:3000/users',form)
    .then(res=>console.log(res.data))
}
return(
    <form onSubmit={handle}>
        <input type='text' value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder='Name'/>
        <br/>
        <input type='Number' value={form.age} onChange={(e)=>setForm({...form,age:Number(e.target.value)})} placeholder='Age'/>
        <br/>
        <input type='email' value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder='Email'/>
        <button onClick={Send}>Add</button>
    </form>
)
}
export default App
