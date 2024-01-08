import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import service1 from '../../assets/Service/01.jpg'
import service2 from '../../assets/Service/02.jpg'
import service3 from '../../assets/Service/03.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={service1} alt="" />
            <div className='swiper-content'>
              <h5>House Cleaning</h5>
              <p>When you work with cleaning you can crops major choir off cleaning</p>
              <button>View Details</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> <div>
            <img src={service2} alt="" />
            <div className='swiper-content'>
              <h5>Upholstery Cleaning</h5>
              <p>When you work with cleaning you can crops major choir off cleaning</p>
              <button  className='btn-2'>View Details</button>
            </div>
          </div></SwiperSlide>
        <SwiperSlide> <div>
            <img src={service3} alt="" />
            <div className='swiper-content'>
              <h5>Office Cleaning</h5>
              <p>When you work with cleaning you can crops major choir off cleaning</p>
              <button className='btn-3'>View Details</button>
            </div>
          </div></SwiperSlide>
        <SwiperSlide> <div>
            <img src={service1} alt="" />
            <div className='swiper-content'>
              <h5>House Cleaning</h5>
              <p>When you work with cleaning you can crops major choir off cleaning</p>
              <button>View Details</button>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div>
            <img src={service2} alt="" />
            <div className='swiper-content'>
              <h5>Upholstery Cleaning</h5>
              <p>When you work with cleaning you can crops major choir off cleaning</p>
              <button>View Details</button>
            </div>
          </div></SwiperSlide>
      </Swiper>
    </>
  );
}