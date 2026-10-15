import { useReducer } from "react";
function reducer(state,action){
switch(action.type){
    case "inc":
        if(state%2===0){
          return state+1;
        }
    return state;
        
    case "inc2":
        if(state%2!==0){
         return state+1;
        }
    return state;
       
    case "dec":
        return state-1;
    default:
        return state;
}
}
function App(){
    const [count,dispatch]=useReducer(reducer,0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch({type:"inc"})}>Add by 1</button>
            <button onClick={()=>dispatch({type:"inc2"})}>Add by 2</button>
            <button onClick={()=>dispatch({type:"dec"})}>Dec</button>
        </div>
    )

}
export default App