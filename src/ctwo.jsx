import {useReducer} from 'react'
function reducer(state,action){
if(action.type==="CLICK")
{
    const newCount=state.count+1
    if(newCount%2!==0){
    return {...state,
        count:newCount,
     odd:newCount
    }
    }else{
    return {
        ...state,
        count:newCount,
        even:newCount
    }
}

     
}
return state;
}
function App(){
const [state,dispatch]=useReducer(reducer,{
    count:0,
    odd:0,
    even:0
})
return(
    <div>  <h1>{state.odd}</h1>
    <h1>{state.even}</h1>
    <button onClick={()=>dispatch({type:"CLICK"})}>Incr</button>
    </div>
  
)
}
export default App