
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     Link,
//     Outlet
// } from "react-router-dom";

// function Admin() {
//     return (
//         <>
//             <h1>Admin</h1>

//             <Link to="/admin">Dashboard</Link>
//             <br />

//             <Link to="/admin/users">Users</Link>
//             <br />

//             <Link to="/admin/settings">Settings</Link>
//             <br />

//             <Outlet />
//         </>
//     );
// }

// function Dashboard() {
//     return <h2>Dashboard Page</h2>;
// }

// function Users() {
//     return <h2>Users Page</h2>;
// }

// function Settings() {
//     return <h2>Settings Page</h2>;
// }

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/admin" element={<Admin />}>
//                     <Route index element={<Dashboard />} />
//                     <Route path="users" element={<Users />} />
//                     <Route path="settings" element={<Settings />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

function Admin() {
    return (
        <>
            <h1>Admin</h1>

            <nav>
                <Link to="users">Users</Link>
                {" | "}
                <Link to="settings">Settings</Link>
            </nav>

            <Outlet />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Admin />}>
                    <Route
                        path="users"
                        element={<h2>Users</h2>}
                    />

                    <Route
                        path="settings"
                        element={<h2>Settings</h2>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

