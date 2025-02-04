import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ImageScroller() {
  const [imageUrls, setImageUrls] = useState([]);
  const swiperRef = useRef(null); 

  useEffect(() => {
    const urls = [];
    for (let i = 1; i <= 5; i++) {
      urls.push(`https://picsum.photos/1024/768?random=${Math.random()}`);
    }
    setImageUrls(urls); 
  }, []);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev(); 
  };

  return (
    <div className="image-scroller-container">
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false} 
        className="mySwiper"
      >
        {imageUrls.length === 0 ? (
          <div>
            <h1>Loading</h1>
            <div className="spinner"></div>
          </div>
        ) : (
          imageUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt={`Random Image ${index + 1}`} />
            </SwiperSlide>
          ))
        )}
      </Swiper>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer transition-all transition-300"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700  cursor-pointer transition-all transition-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
