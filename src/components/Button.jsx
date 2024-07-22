import {Link} from "react-router-dom";
import { FaArrowRight as Arrow } from "react-icons/fa6";

const Button = () => {
    return (
        <Link
            to={""}
            className={"button-shadow font-outfit font-medium text-[20px] rounded-[10px] block text-center border-2 border-gray-15 bg-orange-90 py-[18px]"}
        >
            <span className="flex items-center justify-center">
                Learn More
                <Arrow className="ms-[10px]"/>
            </span>
        </Link>
    );
}

export default Button;