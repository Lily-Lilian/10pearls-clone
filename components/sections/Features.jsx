import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

const Features = () => {
  const [slide, setSlide] = useState();
  const featureCards = [
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/aarp.webp",
      title: "AARP",
      paragraph: "Developing a community experience for caregivers.",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/Decisiv.webp",
      title: "AARP",
      paragraph: "Developing a community experience for caregivers.",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/Paypal.webp",
      title: "AARP",
      paragraph: "Developing a community experience for caregivers.",
    },
    {
      src: "https://10pearls.com/wp-content/uploads/2021/10/MedStar.webp",
      title: "AARP",
      paragraph: "Developing a community experience for caregivers.",
    },
  ];
  return (
    <div>
      <div className="max-w-[1260px] mx-auto mt-20 relative">
        <div className="flex flex-col gap-4">
          <h2 className="text-[22px] text-[#0045A6]">OUR WORK</h2>
          <p className="text-[26px]">Featured case studies</p>
        </div>
        <SlArrowLeft
          onClick={() => {
            slide.slidePrev();
          }}
          className="w-20 h-10 text-[#C6C6C7] absolute -left-16 top-80"
        />
        <SlArrowRight
          onClick={() => {
            slide.slideNext();
          }}
          className="w-20 h-10 text-[#C6C6C7] absolute -right-16 top-80"
        />

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(sliding) => setSlide(sliding)}
          loop
          className="flex gap-12 my-12 h-[600px]"
        >
          {featureCards.map((card, index) => (
            <SwiperSlide key={index} className="group">
              <h1 className="text-2xl group-hover:text-[#757575] mb-2 font-semibold text-[#757575]">
                {card.title}
              </h1>
              <div className="relative max-w-[383px]">
                <img src={card.src} alt="image" />
                <div className="bg-[#F8F9FA]  group-hover:bg-[#0045A6] group-hover:text-white absolute z-50 left-12 right-0 -bottom-12">
                  <p className="text-xl tracking-wider p-8">{card.paragraph}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center">
          <button className="px-6 py-2 border-[#0045A6] border text-[#0045A6] text-center hover:bg-[#0045A6] hover:text-white">
            see case studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
