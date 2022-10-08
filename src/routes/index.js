import * as React from 'react'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {useKeycloak} from '@react-keycloak/web'
import {Home} from "../pages/Home";
import { RegisterIssuerPage } from '../pages/RegisterIssuerPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RegisterIssuerPage/>,
    },
]);
export const AppRouter = () => {
    // const {initialized} = useKeycloak()

    // if (!initialized) {
    //     return <div>Loading...</div>
    // }

    return (
        <RouterProvider router={router}/>
    )
}