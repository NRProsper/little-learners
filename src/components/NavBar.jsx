import {Link} from "react-router-dom";
import Logo from "../assets/img/header-logo.svg";
import { FiAlignRight as Bars } from "react-icons/fi";
const links = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "about",
        title: "About us"
    },
    {
        to: "/",
        title: "Academics"
    },
    {
        to: "/",
        title: "Admissions"
    },
    {
        to: "/",
        title: "Student life"
    },
    {
        to: "/",
        title: "Contact"
    }
]

const NavBar = () => {
    return (
        <div id={"Navigation"}>
            <div className="container mx-auto px-2 xl:px-0">
                <div id="nav-wrapper" className="rounded-[12px] border-2 border-gray-15 flex items-center justify-between overflow-hidden">
                    <Link to={"/"} className="px-[24px] py-[20px] border-r-2 border-gray-15 bg-orange-65">
                        <img src={Logo} alt="Little Learners Logo"/>
                    </Link>
                    <ul className="hidden xl:flex items-center">
                        {
                            links.map((link, idx) => (
                                <li key={idx} className="nav-link">
                                    <Link
                                        to={link.to}
                                        className={`px-[34px] py-[28px] border-s-2 border-gray-15 font-medium text-[20px] hover:bg-orange-95 ${idx===links.length-1? `bg-orange-75` : ``}`}
                                    >{link.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <button className="inline-block px-[34px] py-[28px] border-s-2 border-gray-15 font-medium text-[24px]  xl:hidden">
                        <Bars />
                    </button>
                </div>
            </div>
        </div>
    );
}


export default NavBar