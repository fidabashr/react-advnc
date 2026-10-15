import {BrowserRouter,Routes,Route,Link, useParams} from "react-router-dom";
function Users(){
return(
    <><Link to="/users/fida">User1</Link>
    <Link to="/users/haani">User2</Link>
    <Link to="/users/favas">User3</Link>
    </>
)
    
}
function UserProfile(){
    const {username}=useParams();
    return <h1>Hello {username}</h1>
    
}
function Profile(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users/:username" element={<UserProfile/>}/>
        </Routes>
        </BrowserRouter>
    )

}
export default Profile;