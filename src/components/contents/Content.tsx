import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useCallback, useRef } from "react";
const Content = () => {
  return (
    <div>
      <Contents />
    </div>
  );
};

function Contents() {
  const sliderRef = useRef<SwiperRef>();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="p-5 ">
      {" "}
      <Swiper
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={sliderRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={10}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=" swiper  "
      >
        {[
          "video",
          "bell",
          "user",
          "video",
          "bell",
          "user",
          "video",
          "bell",
          "user",
          "video",
          "bell",
          "user",
          "video",
          "bell",
          "user",
        ].map((Contentarea, index) => (
          <SwiperSlide
            key={index}
            className="hover:cursor-pointer bg-[rgb(49,48,48)] rounded-lg p-1 px-2 font-semibold text-center"
          >
            {Contentarea}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="prev-arrow " onClick={handlePrev} />
      <div className="next-arrow " onClick={handleNext} />
    </div>
  );
}

export default Content;
