import React from "react";

const MediaSection = () => {
  return (
    <div className="w-full bg-blue-100 text-gray-900 text-center py-24 max-md:py-10">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto lg:h-[640px] md:h-[480px] bg-black rounded-3xl max-md:rounded-lg overflow-hidden h-52">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Hf2u0lz995I?si=cOQeeANrl0yXvncK&controls=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center mt-24 max-md:mt-10">
        <h1 className="text-6xl font-extrabold leading-none max-md:text-5xl max-md:w-full mt-5">
          Welcome to Dogizen
        </h1>
        <p className="text-2xl leading-8 max-md:text-lg max-md:leading-7 max-w-[680px] font-bold mt-5">
          You're not just early; you're a pioneer. With over 1 million users
          already on board, Dogizen is redefining the future of Telegram games,
          and our community is at the heart of this revolution. Together, we're
          breaking boundaries—and the possibilities are endless.
        </p>
      </div>
    </div>
  );
};

export default MediaSection;
