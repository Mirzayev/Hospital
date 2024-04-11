import Saidbar from "./saidbar/Saidbar.jsx";
import './home.css'
import {Outlet} from "react-router-dom";
import Topbar from "./components/Topbar.jsx";
 export default function Home() {
    return(
        <div   className=''>
            <div className='xl:flex  '>
                <Saidbar className="basis-1/5 bg-white   xl:block"/>
                <div className='basis-4/5 bg-[#F6F8FB]'>
                    <Topbar />
                    <Outlet />
                </div>

            </div>

        </div>
    )
 }