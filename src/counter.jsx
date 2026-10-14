import {useReducer} from 'react';
function reducer(state,action){
switch(action.type){
    case "Increment":
        return state +1;
    case "Decrement":
        return state-1;
    case "Reset":
        return 0;
    default:
        return state;
}

}

function App(){
const[count,dispatch]=useReducer(reducer,0)

    return(
        <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch({type:"Increment"})}>Inc</button>

        <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>

        <button onClick={()=>dispatch({type:"Decrement"})}>Dec</button>
        </div>
    )
}
export default App