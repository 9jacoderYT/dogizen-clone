import React from "react";

const RoadMap = () => {
  const phases = [
    {
      number: "1",
      title: "PHASE 1: Foundation",
      titleColor: "text-[#FF710D]",
      items: [
        "Launch MVP Game Platform",
        "Reach 1 Million Users",
        "Complete Presale Fundraising",
        "List Dogiz Token on Exchanges",
      ],
    },
    {
      number: "2",
      title: "PHASE 2: Expansion",
      titleColor: "text-[#0036CE]",
      items: [
        "Release Dogizen Launchpad",
        "Expand Dogizen Gaming Arcade",
        "Introduce Developer SDK",
      ],
    },
    {
      number: "3",
      title: "PHASE 3: Innovation",
      titleColor: "text-[#59FF4B]",
      items: [
        "Launch Our Innovative Ads Platform",
        "Secure Brand Partnerships",
        "Start Revenue Sharing for Dogiz Holders",
      ],
    },
  ];

  return (
    <div id="roadmap" className="h-auto">
      <div className="relative min-h-[900px] bg-[#5259FE] pt-24 md:pt-24 max-md:pt-12 overflow-hidden font-sans w-full">
        {/* Title Section */}
        <div className="relative text-6xl md:text-7xl mb-16 font-bold text-center max-md:text-4xl max-md:mb-4 text-white">
          <h2 className="relative z-10">Project Roadmap</h2>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {[0, 1].map((i) => (
              <span
                key={i}
                className="inline-block mx-3 w-14 h-24 bg-white/10 rounded max-md:h-14 max-md:w-8 -skew-x-12"
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:pb-36 max-md:mt-16 relative z-10">
          <div className="h-[1780px] lg:w-[1200px] md:h-[1387px] lg:h-[1005px] px-8 md:px-14 lg:px-0 mx-auto relative mt-4">
            {/* Phase 1 */}
            <div className="relative z-10">
              <div className="relative lg:pt-14 pt-10">
                <div className="flex items-center">
                  <span className="font-sans mr-4 w-12 h-12 rounded-full flex items-center justify-center bg-[#FEC421] text-black text-3xl leading-none font-black italic flex-shrink-0 absolute pr-1 top-[-25px] left-[-5px] md:top-[-20px] md:left-0 lg:left-36">
                    1
                  </span>
                  <h4 className="font-extrabold text-3xl md:text-2xl lg:text-3xl leading-8 lg:leading-10 text-[#FF710D] ml-16">
                    PHASE 1: Foundation
                  </h4>
                </div>
                <div className="rounded-3xl p-6 text-xl leading-7 relative font-semibold mt-4 bg-white/10 text-white md:w-[410px] lg:w-[614px]">
                  {phases[0].items.map((item, index) => (
                    <p key={index} className="flex my-2">
                      <span className="block w-1.5 h-1.5 bg-white rounded-full mr-2 mt-3" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex justify-end md:w-full absolute top-[460px] md:top-[150px] lg:top-[170px]">
              <div className="relative bg-[#FEC421] rounded-3xl p-6 md:w-[405px] lg:w-[468px]">
                <div className="flex items-center">
                  <span className="font-sans mr-4 w-12 h-12 rounded-full flex items-center justify-center bg-[#FEC421] text-black text-3xl leading-none font-black italic flex-shrink-0 absolute pr-1 top-[-95px] left-0 md:left-[-80px] md:top-0">
                    2
                  </span>
                  <h4 className="font-extrabold text-3xl md:text-2xl lg:text-3xl leading-8 lg:leading-10 text-[#0036CE]">
                    PHASE 2: Expansion
                  </h4>
                </div>
                <div className="text-xl leading-7 text-black font-extrabold mt-4">
                  {phases[1].items.map((item, index) => (
                    <p key={index} className="flex my-2 max-md:px-4">
                      <span className="block w-1.5 h-1.5 bg-black rounded-full mr-2 mt-3" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="absolute top-[1190px] md:top-[560px] lg:top-[550px] lg:pt-3 md:pl-14 max-md:mt-12 md:w-full">
              <div className="flex items-center">
                <span className="font-sans mr-4 w-12 h-12 rounded-full flex items-center justify-center bg-[#FEC421] text-black text-3xl leading-none font-black italic flex-shrink-0 absolute pr-1 top-[-55px] left-0 md:left-[-20px] md:top-[-5px] lg:top-[5px]">
                  3
                </span>
                <h4 className="font-extrabold text-3xl md:text-2xl lg:text-3xl leading-8 lg:leading-10 text-[#59FF4B] ml-16">
                  PHASE 3: Innovation
                </h4>
              </div>
              <div className="rounded-3xl p-6 text-xl leading-7 relative font-semibold mt-4 bg-white/10 text-white max-w-[586px]">
                {phases[2].items.map((item, index) => (
                  <p key={index} className="flex my-5">
                    <span className="block w-1.5 h-1.5 bg-white rounded-full mr-2 mt-3" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Decorative Images */}
            <img
              src="https://buy.dogizen.io/_next/image?url=%2Fimages%2Findex%2Froadmap%2Fisland.png&w=1920&q=75"
              alt="Island"
              className="absolute top-1/2 right-0 w-[370px] md:w-[300px] max-md:right-[-30%] max-md:top-[70%] max-md:hidden animate-bounce"
            />
            <img
              src="https://buy.dogizen.io/_next/image?url=%2Fimages%2Findex%2Froadmap%2Fboat.png&w=1920&q=75"
              alt="Boat"
              className="absolute top-[80%] right-[-70px] w-[204px] max-md:right-[-10%] max-md:w-[135px] max-md:top-auto max-md:bottom-[210%] animate-float"
            />
            <img
              src="https://buy.dogizen.io/_next/image?url=%2Fimages%2Findex%2Froadmap%2Fplanet.png&w=3840&q=75"
              alt="Planet"
              className="absolute bottom-0 z-10 w-[448px] lg:w-[524px] left-1/2 -translate-x-1/2 md:translate-y-[60%] lg:translate-y-[90%] animate-pulse"
            />
          </div>
        </div>

        {/* Background Elements */}
        <img
          src="https://buy.dogizen.io/_next/image?url=%2Fimages%2Findex%2Froadmap%2Fcloud2.png&w=384&q=75"
          alt="Cloud 1"
          className="absolute top-[35%] left-0 w-24 max-md:hidden animate-float"
        />
        <img
          src="https://buy.dogizen.io/_next/image?url=%2Fimages%2Findex%2Froadmap%2Fcloud2.png&w=384&q=75"
          alt="Cloud 2"
          className="absolute top-[8%] right-0 w-24 max-md:top-[64%] max-md:w-14 animate-float"
        />
        <div className="w-full h-[357px] overflow-hidden relative max-md:h-[300px] bg-white" />
      </div>
    </div>
  );
};

export default RoadMap;
