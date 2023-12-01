import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import categories from '../../json/categories.json'
import './photos.css';
import CategoriesCard from '../../components/categoriesCard/CategoriesCard';

export default function Photos() {


    return (
        <section className='photos__container'>

                                                            {/*Propuesta de palabra: Album*/}
            <h2 className='photos__title'>CATEGORIAS</h2>

            <section className='photos__categories'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
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
                    <SwiperSlide key={categoy.id}>
                        <div >
                            <CategoriesCard category={categoy}/>
                        </div>
                    </SwiperSlide>
                    ))
                }


            </Swiper>
            </section>
            
        </section>
    );
}
