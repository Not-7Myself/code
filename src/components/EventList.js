// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { EffectCoverflow } from "swiper/modules";

const images = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
];

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
          {images.map((img) => {
            return (
              <SwiperSlide>
                <img src={img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
