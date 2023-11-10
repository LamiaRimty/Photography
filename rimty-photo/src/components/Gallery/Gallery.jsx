import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Gallery.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function Gallery() {
  return (
    <section id="Gallery">
      <h2 className="section-title">My Gallery</h2>
      <span className="section-subtitle">Some of my favourite snaps!!! 📸</span>
      <div className="container gallery-container col-xxl-8 px-2 py-3">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="images/nl.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/belgium.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/luxemburg.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/rila.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/autumn.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/sofia.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/mularthal.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/rilamonas.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/tristate.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default Gallery;
