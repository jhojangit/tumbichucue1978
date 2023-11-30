import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import categories from '../../json/categories.json'
import './photos.css';

export default function Photos() {


    return (
        <section className='photos__container'>

            <section className='photos__categories'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 500,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >




                {
                    categories.map(categoy => (
                    <SwiperSlide>
                        <img 
                        key={categoy.id}
                        src={categoy.url} />
                        <p>{categoy.name}</p>
                    </SwiperSlide>
                    ))
                }







            </Swiper>
            </section>
            
        </section>
    );
}
