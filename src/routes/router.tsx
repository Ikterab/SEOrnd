import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Mainlayout from "../layout/layout";
import Login from "../Pages/login";
import Register from './../Pages/register';
import Careers from "../Pages/career";
import Aboutus from "../Pages/aboutus";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        children: [
            {
                path: "/app",
                element:<App/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/careers",
                element: <Careers />
            },
            {
                path: "/aboutus",
                element: <Aboutus />
            },
        ]
    }
    // {
    //     path:
    // }
])