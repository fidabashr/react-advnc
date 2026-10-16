import { useNavigate ,BrowserRouter,Routes,Route} from "react-router-dom";

function Login(){
    const navigate=useNavigate()
    function handle(){
        navigate("/dashboard")
    }
    return(
        <div>
        <input />
        <input type="password"/>
        <button onClick={handle}>Login</button>
        
        </div>
    )
}
function Dashboard(){
    return(
    <h1>DASHHHBBBBBOOORDDD</h1>

    )
}
function App(){
    return(
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    )
    
}
export default App