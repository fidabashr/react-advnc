import { useContext,createContext } from "react";
const user=createContext();
function Profile(){
    const username=useContext(user)
    return(
        <h2>Hello {username}</h2>
    )
}
function Middle(){
    return <Profile/>
}
function App(){
    return <user.Provider value="fida">
        <Middle/>
    </user.Provider>
}
export default App