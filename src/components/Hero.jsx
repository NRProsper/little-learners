import HeroImg from "../assets/img/hero.png"
const Hero = () => {
    return(
        <section id="hero" className="my-[60px]">
            <div className="container mx-auto px-4 xl:px-[24px]">
                <div className="hero-wrapper flex flex-col xl:flex-row items-center gap-[60px]">
                    <div className="img-wrapper w-full bg-orange-80">
                        <div className=" relative w-full h-full border border-gray-15">
                            <img src={HeroImg} alt="" className="hero-img relative w-full h-full border-4 border-orange-65"/>
                        </div>
                    </div>
                    <div className="text text-center xl:text-left">
                        <h3 className="text-[18px] font-medium font-outfit pb-[6px] border-b-2 border-gray-15 inline-block">Welcome to Little Learners Academy</h3>
                        <h1 className="font-extrabold text-[40px] leading-130 mt-3">
                            Where Young Minds Blossom  and
                            <span className="text-orange-65"> Dreams Take Flight.</span>
                        </h1>
                        <p className="font-medium font-outfit text-[16px] mt-6">Our kinder garden school provides a nurturing and stimulating environment, fostering <br /> a
                            love for learning that lasts a lifetime. Join us as we embark on an exciting <br /> educational journey together!</p>
                        <div className="hero-card mt-[50px] flex flex-col md:flex-row items-center justify-between px-[40px] py-[20px] rounded-[10px] border-2 border-gray-15">
                            <div className="number border-b-2 w-full pb-2 border-gray-15 md:border-0 xl:pb-0 md:w-auto">
                                <span>+7000</span>
                                <span>Students Passed Out</span>
                            </div>
                            <div className="number border-b-2 w-full pb-2 border-gray-15 md:border-0 xl:pb-0 md:w-auto">
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