import BenefitsCard from "../BenefitsCard.jsx";
import graduation from "../../assets/img/graduation.png"
import crown from "../../assets/img/crown.png"
import envi from "../../assets/img/environment.png"
import flag from "../../assets/img/flag.png"
import attention from "../../assets/img/attentetion.png"
import people from "../../assets/img/people.png"
import SectionWrapper from "../../layoutes/SectionWrapper.jsx";

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
        <SectionWrapper mini={"Children Deserve Bright Future"} title={"Our Benefits"} description={"With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum,<br /> we aim to lay a strong foundation for your child's future."}>
            <div className="bottom-cards">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 md:gap-x-[40px] gap-y-[60px]">
                    {
                        benefits.map((benefit, idx) => (
                            <BenefitsCard key={idx} benefit={benefit}/>
                        ))
                    }
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Benefits;