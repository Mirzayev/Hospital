import Saidbar from "./saidbar/Saidbar.jsx";
import './home.css'
import {Outlet} from "react-router-dom";
import Topbar from "./components/Topbar.jsx";
 export default function Home() {
    return(
        <>
            <div className='homeContainer'>
                <Saidbar className="flex-3"/>
                <div className="flex-9">
                    <Topbar/>
                    <Outlet/>
                </div>

            </div>

        </>
    )
 }