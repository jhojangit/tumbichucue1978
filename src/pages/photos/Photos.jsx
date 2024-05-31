import React, { useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import categories from '../../json/categories.json'
import './photos.css';
import CategoriesCard from '../../components/categoriesCard/CategoriesCard';

export default function Photos() {

    categories.sort((a, b) =>   b.id - a.id);

    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth"})
    }, []);




    return (
        <section className='photos__container'>

            <h2 className='photos__title'>CATEGORIAS</h2>

            <section className='photos__categories'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    depth: 500,
                    modifier: 3,
                    slideShadows: true,
                    stretch: 0,
                    
                }}
                pagination={{ 
                    
                    clickable: true,
                    type: 'bullets',
                    bulletClass: "photos__categoriesDots",
                    bulletActiveClass: 'photos__categoriesDots--active', 

                }}
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