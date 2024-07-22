import Person from "../assets/img/testimonial/person1.png"
import Star from "./Star.jsx";

const TestimonialCard = () => {
    return (
        <div className="card_shadow p-[50px] border-2 border-gray-15 rounded-[12px] h-full">
            <div className="top">
                <div className="person text-center">
                    <div className="img inline-block rounded-full border border-gray-20 p-10">
                        <img src={Person} alt="" className="h-[60px] w-[60px]"/>
                    </div>
                    <h3 className="font-outfit font-semibold text-[24px] mt-4">Jennifer B</h3>
                </div>
                <div className="rating flex items-center justify-center gap-2 py-[30px]">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <div className="details text-center">
                    <p className="font-outfit font-medium text-[20px]">
                        Little Learners Academy has been a second home for my child. The <br /> caring staff and engaging programs <br/> have made her excited to go <br /> to school every day!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard