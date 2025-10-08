import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import reviews from "../../../assets/json/reviews.json";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";

// Modules
import { Autoplay, Pagination } from "swiper/modules";

const Reviews = () => {
  useEffect(() => {
    import("aos").then((AOS) => AOS.init());
  }, []);

  return (
    <div
      className="relative py-16 px-4 md:px-8 lg:px-12 mt-20 bg-base-200 rounded-xl"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* Section Title */}
      <h2 className="text-3xl text-success md:text-4xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet bg-gray-500 mx-1 w-3 h-3 rounded-full transition-all duration-300",
          bulletActiveClass: "!bg-success scale-110",
        }}
        className="mySwiper !pb-10" // Adds margin below Swiper slides for pagination bullets
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl m-6 flex flex-col items-center justify-center text-center h-64 w-64 sm:h-72 sm:w-72 mx-auto border border-base-200">
              <img
                src={review.img}
                alt={review.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-4 border-2 border-success"
              />
              <p className="text-base-content/70 text-sm sm:text-base italic line-clamp-4">
                “{review.text}”
              </p>
              <h4 className="mt-4 font-semibold text-success text-sm sm:text-base">
                {review.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
