import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Main from "../pages/Main";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path:"/",
                element:<Main/>
            }
        ]
    }
])