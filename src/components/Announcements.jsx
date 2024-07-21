import abstract from "../assets/img/abstract-orange.svg"
import {Link} from "react-router-dom";
import {FaArrowRight as Arrow} from "react-icons/fa6";

const Announcements = ({className}) => {
    return (
        <div id="announcement" className={`${className}`}>
            <div className="container mx-auto">
                <div className="relative border-2 border-gray-15  py-[14px] rounded-[8px] text-center bg-orange-90 overflow-hidden">
                    <img className="absolute -bottom-6 -left-24 md:-left-2 " src={abstract} alt=""/>
                    <Link to={""} className="relative z-10 font-medium text-[20px] flex items-center justify-center space-x-2">
                        <span>Admission is Open, Grab your seat now</span>
                        <span>
                            <Arrow />
                        </span>
                    </Link>
                    <img className="absolute -bottom-6 -right-24 md:-right-2 transform scale-x-[-1]" src={abstract} alt=""/>
                </div>
            </div>
        </div>
    )
}


export default Announcements;