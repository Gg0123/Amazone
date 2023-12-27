import React from 'react'

import {Swiper,SwiperSlide }from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import './Carousel.css'

function Carousel() {
  return (
    <div className="swiper-container">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
      >
        <SwiperSlide className="swiper-wrapper ">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61CiqVTRBEL._SX3000_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-wrapper ">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61zAjw4bqPL._SX3000_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-wrapper ">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Ie3JXGfVL._SX3000_.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
  
}

export default Carousel

