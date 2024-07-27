import SectionTitle from "./SectionTitle.jsx";

import TestimonialCard from "./TestimonialCard.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import SectionWrapper from "../layoutes/SectionWrapper.jsx";
const Testimonials = () => {


    return(
        <SectionWrapper mini={"Their Happy Words 🤗"} title={"Our Testimonials"} description={"Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both <br /> academically and emotionally."}>
            <Swiper className="p-[20px]"
                    modules={[Navigation]}
                    navigation={false}
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 1,
                        }
                    }}
            >
                <SwiperSlide className=""><TestimonialCard/></SwiperSlide>
                <SwiperSlide className=""><TestimonialCard/></SwiperSlide>
                <SwiperSlide className=""><TestimonialCard/></SwiperSlide>
                <SwiperSlide className=""><TestimonialCard/></SwiperSlide>
                <SwiperSlide className=""><TestimonialCard/></SwiperSlide>
            </Swiper>
        </SectionWrapper>
    )
}


export default Testimonials;