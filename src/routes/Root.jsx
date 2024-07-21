import Announcements from "../components/Announcements.jsx";
import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <>
           <header className="mt-[18px]">
               <Announcements className={"mb-[14px]"} />
               <NavBar />
           </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Root