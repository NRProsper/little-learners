import { LuPlus as Plus } from "react-icons/lu";
import { PiMinus as Minus } from "react-icons/pi";
import {useState} from "react";

const Question = () => {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className={`p-[40px] border-2 border-gray-15 font-outfit rounded-[12px] ${!isOpen ? `bg-orange-95`:``}`}>
            <div className="question flex items-center justify-between">
                <h3 className="font-semibold text-[22px]">What are the school hours at Little Learners Academy?</h3>
                <span
                    className="p-[8px] ms-[30px] rounded-[6px] border-2 border-gray-15 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen? <Minus /> : <Plus />}
                </span>
            </div>
            {
                isOpen? (<div className="solution pt-[16px]">
                    <p className="font-medium text-[20px] inline-block border-t-2 border-gray-15 pt-[16px]">Our school
                        hours are from 8:00 AM to 3:00 PM, Monday to Friday. <br/> We also offer extended care options
                        for parents who need early drop-off <br/> or late pick-up.</p>
                </div>) : ""
            }
        </div>
    )
}

export default Question;