import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import React, { useState } from "react";
import Swiper from "swiper";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "right") {
      setIndex((prevIndex) => (prevIndex === 1 ? 1 : prevIndex + 1));
    } else if (direction === "left") {
      setIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    }
  };

  return (
    <div>
      <div
        className={`swipe-container bg-cover w-full h-[100vh]`}
        style={{
          backgroundImage: `url(${
            index === 0
              ? "https://10pearls.com/wp-content/uploads/2020/11/hero-1-img.png"
              : "https://10pearls.com/wp-content/uploads/2020/11/slide-3-mobile.png"
          })`,
        }}
      >
        <div className="top-30 flex ">
          <SlArrowLeft
            className="w-20 h-10 text-[#C6C6C7] absolute left-0 top-60"
            onClick={() => {
              if (index > 0) {
                handleClick("left");
              }
            }}
          />
          <SlArrowRight
            className="w-20 h-10 text-[#C6C6C7] absolute right-0 top-60"
            onClick={() => {
              if (index < 1) {
                handleClick("right");
              }
            }}
          />
        </div>
        <div className="max-w-[1240px] mx-auto pt-60">
          <div className="flex flex-col gap-8 max-w-lg">
            <h2 className="text-3xl font-normal">
              {index === 0 ? "Reimagine with Purpose" : "Another Purpose"}
            </h2>
            <p className="text-xl mb-8 font-normal">
              {index === 0
                ? "We help businesses digitally transform, build new products, and accelerate digital teams."
                : "Dummy data to demonstrate swipe between two divs."}
            </p>
          </div>
          <button className="py-4 px-9 hover:bg-[#0045A6] hover:text-white text-[#0045A6] border-[#0045A6] border">
            let's build something
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
