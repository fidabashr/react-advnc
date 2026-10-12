// import { useState,useEffect } from 'react'


// function App() {
//   const [users,setUsers]=useState([])
//   useEffect(()=>{
//     fetch("http://localhost:3000/users")
   
//   },[]);
//   return (
//     <div>{users.map(user=>(<p key={user.id}>{user.name} {user.age}</p>))}</div>
//   )
// }

// export default App
function App(){
function addUser(){
  fetch("http://localhost:3000/users",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      id:3,
      name:"Fida",
      age:20})
  }).then(res=>res.json())
  .then(data=>console.log(data))
}
return (
  <div>
    <h1>POST Test</h1>
    <button onClick={addUser}>Click to post</button>
  </div>
)
}

 export default App
