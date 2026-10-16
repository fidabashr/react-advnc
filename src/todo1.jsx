import {useState,useReducer} from 'react';
function reducer(state,action){
    if(action.type==="Add"){
        return [...state,{
            id:Date.now(),
            text:action.payload,
        completed:false}]
    }
    if(action.type==="Delete"){
        return state.filter((todo)=>todo.id!==action.payload)
    }if(action.type==="Edit"){
     return state.map((todo)=>todo.id===action.payload.id?{...todo,text:action.payload.text}:todo)
    }

    return state;

}
function App(){
const [todos,dispatch]=useReducer(reducer,[])
const[task,setTask]=useState("")
const [editId,setEditId]=useState(null);
function Edited(todo){
    setEditId(todo.id)
    setTask(todo.text)
}
function Updated(){
    dispatch({type:"Edit", payload:{
        id:editId,
        text:task
    }})
    setEditId()
    setTask("")
}
return (
    <div>
        <input value={task} onChange={(e)=>setTask(e.target.value)}/>

        {editId===null?<button onClick={()=>{dispatch({type:"Add" ,payload:task}, setTask(""))}}>Add</button>:<button onClick={Updated}>Update</button>}

        <ul>{todos.map((todo)=>(<li key={todo.id}><br/>{todo.text}
            
            <button onClick={()=>dispatch({type:"Delete",payload:todo.id})}>Delete</button>
            <button onClick={()=>Edited(todo)}>Edit</button>
        </li>))}</ul>
    </div>
)
}
export default App