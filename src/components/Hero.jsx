import HeroImg from "../assets/img/hero.png"
const Hero = () => {
    return(
        <section id="hero" className="my-[60px]">
            <div className="container mx-auto px-[24px]">
                <div className="hero-wrapper flex items-center gap-[60px]">
                    <div className="img-wrapper h-[785] w-[785px] bg-orange-80">
                        <div className="img relative w-full h-full border border-gray-15">
                            <img src={HeroImg} alt="" className="w-full h-full border-4 border-orange-65"/>
                        </div>
                    </div>
                    <div className="text">
                        <h3 className="text-[18px] font-medium font-outfit pb-[6px] border-b-2 border-gray-15 inline-block">Welcome to Little Learners Academy</h3>
                        <h1 className="font-extrabold text-[40px] leading-130 mt-3">
                            Where Young Minds Blossom <br /> and
                            <span className="text-orange-65"> Dreams Take Flight.</span>
                        </h1>
                        <p className="font-medium font-outfit text-[16px] mt-6">Our kinder garden school provides a nurturing and stimulating environment, fostering <br /> a
                            love for learning that lasts a lifetime. Join us as we embark on an exciting <br /> educational journey together!</p>
                        <div className="hero-card mt-[50px] flex items-center justify-between px-[40px] py-[20px] rounded-[10px] border-2 border-gray-15">
                            <div className="number">
                                <span>+7000</span>
                                <span>Students Passed Out</span>
                            </div>
                            <div className="number">
                                <span>+37</span>
                                <span>Awards & Recognitions</span>
                            </div>
                            <div className="number">
                                <span>+15</span>
                                <span>Experience Educators</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero