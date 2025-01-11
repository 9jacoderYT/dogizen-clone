"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const GameSlider = () => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: (
        <>
          Introducing the world's first{" "}
          <span className="text-primary mr-1">Telegram ICO</span>
        </>
      ),
      description:
        "With a billion users, Telegram is more than a platform—it's a movement. Dogizen is the first to launch an ICO directly within Telegram, using its reach to transform gaming and crypto.",
      image:
        "https://buy.dogizen.io/_next/image?url=%2Fimages%2Findex%2Fgame%2Fgame4.webp%3Fv%3D2&w=1920&q=75",
    },
    {
      id: 2,
      title: (
        <div className="w-full lg:w-full">
          <span className="text-primary mr-1">It all started with</span> Pavel
          Durov
        </div>
      ),
      description:
        "When Telegram's founder mentioned Dogizen, we knew it was our moment. It might not have been a direct call, but it felt like fate—especially knowing his love for dogs. We couldn't resist..",
      image:
        "https://buy.dogizen.io/_next/image?url=%2Fimages%2Findex%2Fgame%2Fgame4.webp%3Fv%3D2&w=1920&q=75",
    },
    {
      id: 3,
      title: (
        <div className="lg:w-[120%]">
          <p className="text-primary mr-2">Bringing next-gen</p> Telegram gaming
          today
        </div>
      ),
      description:
        "We're here to dream big, and the DOGIZ token is just the beginning. Think of us as the Epic Games of Telegram, pioneering a new era in social gaming. With Dogizen, the future isn't just coming—it's already here.",
      image:
        "https://buy.dogizen.io/_next/image?url=%2Fimages%2Findex%2Fgame%2Fgame4.webp%3Fv%3D2&w=1920&q=75",
    },
  ];

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div id="vision" className="relative max-xl:px-5 bg-[#D9E2FF] p-5 py-10">
      <div className="max-w-[1250px] mx-auto overflow-hidden rounded-[58px] bg-[#CED9FF] md:h-[636px]">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="h-full"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="size-full pl-5 md:pl-[80px] relative overflow-hidden">
                <div className="size-full flex flex-col items-start gap-6 justify-center py-8 md:py-0">
                  <div className="w-full md:w-[50%]">
                    <h3 className="text-4xl md:text-[60px] leading-tight md:leading-none font-black capitalize">
                      {slide.title}
                    </h3>
                    <div className="flex flex-col items-start mt-4">
                      <div className="text-lg md:text-[24px] leading-normal md:leading-[32px] font-bold mb-8">
                        {slide.description}
                      </div>
                    </div>
                  </div>

                  <div className="w-full z-10">
                    <div className="px-5 md:px-[80px] flex items-center gap-4 justify-center md:justify-start">
                      <svg
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`cursor-pointer ${
                          activeIndex === 0 ? "hidden" : "block"
                        }`}
                        onClick={handlePrev}
                      >
                        <path
                          d="M25.5 11.25C26.1904 11.25 26.75 10.6904 26.75 10C26.75 9.30964 26.1904 8.75 25.5 8.75V11.25ZM1.11612 9.11612C0.627962 9.60427 0.627962 10.3957 1.11612 10.8839L9.07107 18.8388C9.55922 19.327 10.3507 19.327 10.8388 18.8388C11.327 18.3507 11.327 17.5592 10.8388 17.0711L3.76777 10L10.8388 2.92893C11.327 2.44078 11.327 1.64932 10.8388 1.16117C10.3507 0.67301 9.55922 0.67301 9.07107 1.16117L1.11612 9.11612ZM25.5 8.75L2 8.75V11.25L25.5 11.25V8.75Z"
                          fill="#0037CF"
                        />
                      </svg>
                      <span className="text-[30px] text-primary font-bold">
                        {slide.id}
                      </span>
                      <svg
                        width="27"
                        height="20"
                        viewBox="0 0 27 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`cursor-pointer ${
                          activeIndex === slides.length - 1 ? "hidden" : "block"
                        }`}
                        onClick={handleNext}
                      >
                        <path
                          d="M2 8.75C1.30964 8.75 0.75 9.30964 0.75 10C0.75 10.6904 1.30964 11.25 2 11.25L2 8.75ZM26.3839 10.8839C26.872 10.3957 26.872 9.60428 26.3839 9.11612L18.4289 1.16117C17.9408 0.673013 17.1493 0.673013 16.6612 1.16117C16.173 1.64932 16.173 2.44078 16.6612 2.92893L23.7322 10L16.6612 17.0711C16.173 17.5592 16.173 18.3507 16.6612 18.8388C17.1493 19.327 17.9408 19.327 18.4289 18.8388L26.3839 10.8839ZM2 11.25L25.5 11.25L25.5 8.75L2 8.75L2 11.25Z"
                          fill="#0037CF"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex absolute right-0 top-0 w-[42%] lg:w-[42.85%] h-full items-center justify-center overflow-hidden">
                  <img
                    alt="Dogizen"
                    src={slide.image}
                    className="absolute w-auto h-full max-w-none right-0 top-0 z-[2]"
                    loading="lazy"
                    width={700}
                    height={1400}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GameSlider;
