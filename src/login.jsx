import { useNavigate } from "react-router-dom";
function Login(){
    const navigate=useNavigate()
    function handle(){
        navigate("/dashboard")
    }
    return(
        <>
        <input />
        <input type="password"/>
        <button onClick={handle}>Login</button>
        </>
    )
}
export default Login