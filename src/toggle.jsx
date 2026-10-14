import {useReducer} from 'react'
function reducer(state,action){
if(action.type==="show"){
    return true;
}if(action.type==="hide"){
    return false;
}
return state;
}
function App(){
    const [show,dispatch]=useReducer(reducer,false)
return(
    <div>
    <button onClick={()=>dispatch({type:show?"hide":"show"})}>{show?"hide":"show"}</button>
    {show && <p>This is a paragraph</p>}
    </div>
)
}
export default App