import SectionWrapper from "../../layoutes/SectionWrapper.jsx";
import Question from "../Question.jsx";

const FAQ = () => {
    return (
        <SectionWrapper
            mini={"Solutions For The Doubts"}
            title={"Frequently Asked Questions"}
            description={"Find all the essential information you need in our FAQ section, designed to address the most frequently asked <br /> questions and help you make informed decisions for your child's education."}
        >
            <div id="questions" className="flex flex-col lg:flex-row items-start gap-[50px]">
                <div className="col flex-col flex gap-[30px]">
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                </div>
                <div className="col flex-col flex gap-[30px]">
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default FAQ;