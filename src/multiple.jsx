import {BrowserRouter,Routes,Route,Link, useParams} from 'react-router-dom';
function Product(){
    return(
        <><Link to="/product/elec/100">Phone</Link>
<Link to="/product/gadget/198">Watch</Link>
<Link to="/product/homeapp/104">utensil</Link></>

    )


}
function ProductDetails(){
const {category,id}=useParams();
return <h1>cat:{category} of id :{id} </h1>
}
function details(){
    return(
<BrowserRouter>
    <Routes>
      <Route path="/product" element={<Product/>}/>
      <Route path="/product/:category/:id" element={<ProductDetails/>}/>
      <Route/>
    </Routes>
    </BrowserRouter>

    )
    
}
export default details