import SectionTitle from "./SectionTitle.jsx";
import BenefitsCard from "./BenefitsCard.jsx";
import graduation from "../assets/img/graduation.png"
import crown from "../assets/img/crown.png"
import envi from "../assets/img/environment.png"
import flag from "../assets/img/flag.png"
import attention from "../assets/img/attentetion.png"
import people from "../assets/img/people.png"

const benefits = [
    {
        icon: graduation,
        title: "Holistic Learning Approach",
        description: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
    },
    {
        icon: crown,
        title: "Experienced Educators",
        description: "Our passionate and qualified teachers create a supportive and stimulating learning environment."
    },
    {
        icon:envi,
        title: "Nurturing Environment",
        description: "We prioritize safety and provide a warm and caring atmosphere for every child."
    },
    {
        icon: flag,
        title: "Play-Based Learning",
        description: "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
    },
    {
        icon: attention,
        title: "Individualized Attention",
        description: "Our small class sizes enable personalized attention, catering to each child's unique needs."
    },
    {
        icon: people,
        title: "Parent Involvement",
        description: "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
    }
]

const Benefits = () => {
    return (
        <section id="benefits" className="my-[70px]">
            <div className="container mx-auto px-[24px]">
                <div className="benefits-container flex items-center justify-center flex-col gap-y-[100px]">
                    <div className="top flex items-center justify-center flex-col">
                        <SectionTitle>
                            <h3>Children Deserve Bright Future</h3>
                        </SectionTitle>
                        <h1 className="font-bold text-[58px] my-3">Our Benefits</h1>
                        <p className="font-outfit text-[20px] font-medium text-center">With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum,<br /> we aim to lay a strong foundation for your child's future.</p>
                    </div>
                    <div className="bottom-cards">
                        <div className="grid grid-cols-3 grid-rows-2 gap-x-[40px] gap-y-[60px]">
                            {
                                benefits.map((benefit, idx) => (
                                    <BenefitsCard key={idx} benefit={benefit} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;