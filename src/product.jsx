import { useNavigate,useParams, BrowserRouter,Routes,Route, Link} from "react-router-dom";
const products = [
  { id: 1, name: "iPhone" },
  { id: 2, name: "MacBook" },
  { id: 3, name: "AirPods" }
];
function Product(){
return(
    <div>
        <ul>{products.map((prd)=>(<li key={prd.id}>
            <Link to={`/product/${prd.id}` }>{prd.name}</Link>
            </li>))}</ul>

    </div>
)
}
function ProductId(){
const {id}=useParams()
const nav=useNavigate()
let product=products.find((prd)=>prd.id===Number(id))
return(
    <div>
    <h1>Product {product.id} </h1>
     <h1>Product {product.name} </h1>
    <button onClick={()=>nav(-1)}>Back</button>
    <button onClick={()=>nav(1)}>Next</button>
    </div>

)
}
function App(){
return(
    <BrowserRouter>
    <Routes>
        <Route path="/product" element={<Product/>}/>
    
        <Route path="/product/:id" element={<ProductId/>}/>
        </Routes></BrowserRouter>
)
}
export default App