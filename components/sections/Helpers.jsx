import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

const Helpers = () => {
  const [slide, setSlide] = useState();
  const images = [
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/Titles_AlignEnterprise.png",
      alt: "Image 1",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/Titles_90-Day-mindset-Agile.png",
      alt: "Image 2",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/Titles_productDev.png",
      alt: "Image 3",
    },
  ];
  return (
    <div className="relative">
      <div className="pt-20 pb-24 max-w-[1140px] mx-auto">
        <h1 className="text-2xl text-[#757575] mb-8">
          We help businesses disrupt, accelerate & scale
        </h1>
        <SlArrowLeft
          onClick={() => {
            slide.slidePrev();
          }}
          className="w-20 h-10 text-[#C6C6C7] absolute left-14 top-60"
        />
        <SlArrowRight
          onClick={() => {
            slide.slideNext();
          }}
          className="w-20 h-10 text-[#C6C6C7] absolute right-14 top-60"
        />

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(sliding) => setSlide(sliding)}
          loop
          className="flex gap-16 items-center"
        >
          {images.map((image, index) => (
            <SwiperSlide>
              <img
                key={index}
                className="max-w-[353px]"
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Helpers;
