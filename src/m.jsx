import {useContext,createContext} from 'react'
let user=createContext()
function Profile(){
let username=useContext(user)
return(
    <h1>Hello {username}</h1>
)
}
function Middle(){
    return <Profile/>
}
function Another(){
    return <Middle/>
}
function App(){
return(
    <user.Provider value="fida">
        <Another/>
    </user.Provider>
)
}
export default App