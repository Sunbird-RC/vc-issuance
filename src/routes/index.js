import * as React from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {useKeycloak} from '@react-keycloak/web'
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
]);
export const AppRouter = () => {
    const {initialized} = useKeycloak()

    if (!initialized) {
        return <div>Loading...</div>
    }

    return (
        <RouterProvider router={router}/>
    )
}