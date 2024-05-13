import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  Navigation,
  Keyboard,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function Slider(props) {
  return (
    <div className="parent-slider">
      <h1>Previews Symposium</h1>
      <div className="slider">
        <button className="arrow-left arrow">
          <FontAwesomeIcon icon={faChevronLeft} style={{ color: "white" }} />
        </button>
        <button className="arrow-right arrow">
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "white" }} />
        </button>

        <Swiper
          modules={[
            Keyboard,
            Mousewheel,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
          ]}
          speed={150}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          mousewheel={true}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          keyboard={{
            enabled: true,
          }}
        >
          {props.slides.map((slide) => (
            <SwiperSlide key={slide.image}>
              <div
                className="sliderimg"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
