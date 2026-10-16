import { useNavigate,BrowserRouter,Routes,Route, useParams,Link } from "react-router-dom";
function Product(){

    return(
        <div>
            <Link to="/product/1">Prd1</Link>
             <Link to="/product/2">Prd1</Link>
            
        </div>
    )
}
function PrdList(){
const {id}=useParams()
    const navigate=useNavigate()
    function Back(){
        navigate(-1)
    }
return(
    <div><h1>Product {id}</h1>
     <button onClick={Back}>Back</button>
     </div>
)
    
}
function App(){
    return(
<BrowserRouter>
<Routes>
    <Route path="/product" element={<Product/>}/>
    <Route path="/product/:id" element={<PrdList/>}/>
</Routes>
</BrowserRouter>
    )

}
export default App
