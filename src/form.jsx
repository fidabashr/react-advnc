import { useNavigate,BrowserRouter,Routes,Route } from "react-router-dom";
function Register() {

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    alert("Registration successful");

    navigate("/login");
  }

  return (
    <form >

      <input placeholder="Username" />
      <input placeholder="Password" />

      <button onClick={handleSubmit} type="submit">
        Register
      </button>

    </form>
  );
}
function Login(){
    return(
        <h1>Login</h1>
    )
}
function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            </Routes></BrowserRouter>
    )
}
export default App