import SectionWrapper from "../../layoutes/SectionWrapper.jsx";
import Card from "../Card.jsx";
import Button from "../Button.jsx";


const Explore = () => {

    const pages = [
        {
            title: "about us",
            description: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."
        },
        {
            title: "Academics",
            description: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development."
        },
        {
            title: "Student Life",
            description: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable."
        },
        {
            title: "Admissions",
            description: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces."
        }
    ]

    return(
        <SectionWrapper
            mini={"Explore More"}
            title={"Navigate through our Pages"}
            description={"Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore <br /> and learn more about the enriching experiences that await your child at our kindergarten school"}
        >
            <div className="pages grid-cols-1 lg:grid-cols-2 grid gap-[50px]">
                {
                    pages.map((page, idx) => (
                        <Card key={idx}>
                            <div className="content text-center">
                                <h2 className="font-raleway text-[48px] font-bold capitalize">{page.title}</h2>
                                <div className="content mb-[80px]">
                                    <p className="font-outfit text-[20px] font-medium">{page.description}</p>
                                </div>
                                <Button />
                            </div>
                        </Card>
                    ))
                }
            </div>
        </SectionWrapper>
    )
}

export default Explore;