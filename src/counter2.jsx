import { useReducer } from "react";
function reducer(state,action){
if(action.type==="inc"){
    return state+1
}
if(action.type==="dec"){
    return state-1
}
return state
}
function App(){
const [count,dispatch]=useReducer(reducer,0)
return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch({type:"inc"})}>Inc</button>
        <button onClick={()=>dispatch({type:"dec"})}>Dec</button>
    </div>
)
}
export default App