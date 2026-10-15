import {BrowserRouter,Routes,Route,Link,useParams} from "react-router-dom";
function Products(){
    return(
        <>
        <h1>Products</h1>
        <Link to="/products/1">iphone</Link>
        <br/>
        <Link to="/products/2">Macbook</Link>
        <br/>
        <Link to="/products/3">Airpods</Link>
        </>
    )
}
function ProductDetails(){
    const {id} =useParams();
    return <h1>Product Id:{id}</h1>
}
function App(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
    )
   

}
export default App;