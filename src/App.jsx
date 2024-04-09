import {useState} from 'react'
import Home from "./Pages/HomePage/Home.jsx";
import './App.css'
import Feed from "./Pages/HomePage/feed/Feed.jsx";
import Doctors from "./Pages/HomePage/components/Doctors.jsx";
import Patients from "./Pages/HomePage/components/Patients.jsx";
import Wards from "./Pages/Wards.jsx";
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
                    element: <Doctors/>
                },
                {
                    path: "/patients",
                    element: <Patients/>
                },
                {
                    path: '/wards',
                    element: <Wards/>
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
