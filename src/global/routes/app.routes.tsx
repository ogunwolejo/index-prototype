import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Registration } from "../../pages/register";
import { Login } from "../../pages/login";


const AppRoutes:FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>} />
                <Route path="register" element={<Registration/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes