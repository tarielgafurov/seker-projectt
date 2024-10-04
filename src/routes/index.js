
import { Route, Routes } from "react-router-dom"
import AdminPage from "../components/admin/AdminPage"
import UsersPage from "../components/users/UsersPage"

const SekerProject = ()=>{
    return (
        <Routes>
            <Route path="/" element={<UsersPage/>}></Route>
            <Route path="/admin" element={<AdminPage/>}></Route>
        </Routes>
    )
}
 
export default SekerProject 