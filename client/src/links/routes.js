import {links} from "./links"
import {Navigate} from "react-router-dom"

import MainPage from "../pages/mainPage/MainPage"
import Signup from "../components/auth/sighup/Signup"
import Login from "../components/auth/login/Login"
import UserPage from "../pages/userPage/UserPage"
import AdminPage from "../pages/adminPage/AdminPage"
import PayPage from "../pages/payPage/PayPage"

export const authRoutes = [
    {
        path: links.admin,
        element: <AdminPage/>
    },
]

export const publicRoutes = [
    {
        path: links.base,
        element: <MainPage/>
    },
    {
        path: links.signup,
        element: <Signup/>
    },
    {
        path: links.login,
        element: <Login/>
    },
    {
        path: links.user + '/:id/',
        element: <UserPage/>
    },
    {
        path: links.pay + '/:id/',
        element: <PayPage/>
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    },
]