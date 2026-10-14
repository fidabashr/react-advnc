import {useReducer, useState} from 'react';
function reducer(state,action){
if(action.type==="Add"){
   return [...state,
    {
        id:Date.now(),
        text: action.payload,
        completed:false
    }
   ];}
if(action.type==="Delete"){
return state.filter((todo)=>todo.id!==action.payload)
   }
if(action.type==="edit"){
return state.map((todo)=>todo.id===action.payload.id?{...todo,text:action.payload.text}:todo)
}

return state;

}
function App(){
const[todos,dispatch]=useReducer(reducer,[]);
const[task,setTask]=useState("");
const[editId,setEditId]=useState(null)

function editTodo(todo){
    setEditId(todo.id)
    setTask(todo.text)
}
function Update(){
    dispatch({type:"edit",payload:{
        id:editId,
        text:task
    }})
    setTask("")
    setEditId(null)
}

return(
    <div><input value={task} onChange={(e)=>setTask(e.target.value)}/>
    {editId===null? <button onClick={()=>{dispatch({type:"Add",payload:task}); setTask(" ")}}>Add</button>:<button onClick={Update}>Update</button>}
   
    <ul>
        {todos.map((todo)=>(<li key={todo.id}>{todo.text}
            <button onClick={()=>dispatch({type:"Delete",payload:todo.id})}>Delete</button>
            <button onClick={()=>editTodo(todo)}>Edit</button>
        </li>))}
    </ul>

    </div>
    




)
}
export default App