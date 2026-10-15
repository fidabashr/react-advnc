 import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
 function Home(){
    return <h1>Home</h1>
 }
 function About(){
    return <h2>About</h2>
 }
 function Contact(){
    return <h1>Contact</h1>
 }
 function App(){
    return(
        <BrowserRouter>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">contact</NavLink>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*"element={<h1>Page not Found</h1>}/>
        </Routes>
        </BrowserRouter>
    )
 }
 export default App