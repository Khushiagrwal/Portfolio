import React from 'react';
import Me from "../Assets/anime.jpeg";
import Me2 from "../Assets/anime2.jpeg"
import Me3 from "../Assets/anime3.jpeg"
import "./Testimonials.css";
// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
    {
        avtar:Me,
        name:"Kunnu",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quod praesentium eius quibusdam minima nihil doloribus ipsa doloremque nam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quod praesentium eius quibusdam minima nihil doloribus ipsa doloremque nam!"
    },
    {
        avtar:Me2,
        name:"Kunnu",
        review:"Lorem ipsum dolor sit amet consectetur adipirem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quod praesentium eius quibusdam minima nihil doloribus ipsa doloremque nam!"
    },
    {
        avtar:Me3,
        name:"Kunnu",
        review:"Lorem ipsum dolor sit amet consectetur adipirem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat quod praesentium eius quibusdam minima nihil doloribus ipsa doloremque nam!"
    }
]
export const Testimonials = (props) => {
    return (
        <section id="Testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials_container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >{
                data.map(({avtar,name,review},index)=>{
                    return(
                    <SwiperSlide key={index}className="testimonials">
                        <div className="client_avtar">
                            <img src={avtar} alt=""    className='image' />
                        </div>
                        <h5 className='client_name'>{name}</ h5>
                            <small className='client_review'>
                                {review}
                            </small>
                    </SwiperSlide>
                    );
             })
        }
            </Swiper>
        </section>
    );
};
