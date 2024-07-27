import Announcements from "../components/home/Announcements.jsx";
import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

const Root = () => {
    return (
        <>
           <header className="mt-[18px]">
               <Announcements className={"mb-[14px]"} />
               <NavBar />
           </header>
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Root