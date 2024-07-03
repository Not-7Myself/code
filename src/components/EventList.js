// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { EffectCoverflow } from "swiper/modules";

export default function EventList() {
  return (
    <div className="eventBox">
      <div className="subHead">
        <h1>Events</h1>
      </div>
      <div className="events">
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
