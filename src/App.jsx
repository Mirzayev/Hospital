import {useState} from 'react'
import Home from "./Pages/HomePage/Home.jsx";
import './App.css'
import Feed from "./Pages/HomePage/feed/Feed.jsx";
import DoctorsPage from "./Pages/Doctors/DoctorsPage.jsx";
import PatientsPage from "./Pages/Patients/PatientsPage.jsx";
import Wards from "./Pages/Wards/Wards.jsx";
import Department from "./Pages/Department/Department.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            // errorElement:<PageNotFound/>,
            children: [
                {
                    index: true,
                    // path:"/",
                    element: <Feed/>
                },
                {
                    path: "/doctors",
                    element: <DoctorsPage/>
                },
                {
                    path: "/patients",
                    element: <PatientsPage/>
                },
                {
                    path: '/wards',
                    element: <Wards/>
                },
                {
                    path: '/department',
                    element: <Department/>
                }

            ]
        }
    ])
    return (
        <div className='AppContainer'>
           {/*<Home/>*/}
            <RouterProvider router={routes}/>
        </div>
    )
}

export default App
