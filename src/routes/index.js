
import { Route, Routes } from "react-router-dom"
import UserHeader from "../components/users/UserHeader"
import AdminHeader from "../components/admin/AdminHeader"

const SekerProject = ()=>{
    return (
        <Routes>
            <Route path="/" element={<UserHeader/>}></Route>
            <Route path="/admin" element={<AdminHeader/>}></Route>
        </Routes>
    )
}

export default SekerProject 