import Saidbar from "./saidbar/Saidbar.jsx";
import Feed from "./feed/Feed.jsx";
import './home.css'
import {Outlet} from "react-router-dom";
 export default function Home() {
    return(
        <>
            <div className='homeContainer'>
                <Saidbar/>

                <Feed/>

            </div>

        </>
    )
 }