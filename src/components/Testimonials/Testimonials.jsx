import React from 'react';
import './Testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
    const data = [
        {
            avatar: AVATAR1,
            name: 'Tina Sown',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque dolorem qui harum nam debitis doloribus distinctio exercitationem animi esse sint fugit modi, possimus necessitatibus porro perspiciatis laborum. Et, ex?'
        },
        {
            avatar: AVATAR2,
            name: 'Tina Sown',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque dolorem qui harum nam debitis doloribus distinctio exercitationem animi esse sint fugit modi, possimus necessitatibus porro perspiciatis laborum. Et, ex?'
        },
        {
            avatar: AVATAR3,
            name: 'Tina Sown',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque dolorem qui harum nam debitis doloribus distinctio exercitationem animi esse sint fugit modi, possimus necessitatibus porro perspiciatis laborum. Et, ex?'
        },
        {
            avatar: AVATAR4,
            name: 'Tina Sown',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo itaque dolorem qui harum nam debitis doloribus distinctio exercitationem animi esse sint fugit modi, possimus necessitatibus porro perspiciatis laborum. Et, ex?'
        }
    ]
    return (
        <section>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials-container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client-avatar">
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h5 className='client-name'>{name}</h5>
                                <small className='client-review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;