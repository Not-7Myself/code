// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

import { data } from "../data";

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
          {data.map((data) => {
            return (
              <SwiperSlide>
                <NavLink to={`Event/${data.Nome}`}>
                  <img src={data.img} alt={data.Nome} />
                </NavLink>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
