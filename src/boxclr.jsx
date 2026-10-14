import {useState} from 'react';
function App(){
let colors=["red","green","blue","yellow"];
const [index,setIndex]=useState(0);

return(
    <div>
     <h1>{colors[index]}</h1>
     

    <button disabled={index===0} onClick={()=>setIndex(prev=>prev-1)}>Prev</button>
    <button disabled={index==colors.length-1}onClick={()=>setIndex(prev=>prev+1)}>Next</button>
    <div style={{width:'200px',height:'200px',backgroundColor:colors[index]}}></div>
    
    
    </div>
)
}
export default App