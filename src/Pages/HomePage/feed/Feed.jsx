import './feed.css'
import Topbar from "../components/Topbar.jsx";
import Departments from "../components/Departments.jsx";
import Patients from "../components/Patients.jsx";
import Doctors from "../components/Doctors.jsx";
import {Outlet} from "react-router-dom";
export default function Feed() {
    return (
        <div className='feed  flex-9 bg-[#F6F8FB]'>
          <div>

            <Departments/>

          </div>
        </div>
    )
}