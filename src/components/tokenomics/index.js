import React from "react";

const TokenSection = ({
  percentage,
  title,
  amount,
  color,
  children,
  isMobile = false,
}) => (
  <div className="flex items-center leading-none font-bold">
    {isMobile && (
      <i
        className="block size-[38px] rounded-full flex-shrink-0 mr-5 max-xxs:size-[20px]"
        style={{ backgroundColor: color }}
      />
    )}
    <span className="lg:text-[62px] md:text-[52px] leading-none mr-4 text-white max-md:text-[48px] max-xxs:text-[40px]">
      {percentage}%
    </span>
    <div>
      <p className="text-[#FEC421] lg:text-[36px] md:text-[30px] max-md:text-[32px] max-xxs:text-[28px]">
        {title}
      </p>
      <p className="text-white/45 lg:text-[24px] md:text-[20px] max-md:text-[22px]">
        {amount}
      </p>
    </div>
    {children}
  </div>
);

const ConnectorLine = ({ path }) => (
  <svg
    className="max-md:hidden absolute"
    {...path.svgProps}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* <path d={path.d} stroke="white" strokeWidth="3" /> */}
  </svg>
);

const Tokenomics = () => {
  const sections = [
    {
      percentage: 40,
      title: "Community",
      amount: "400,000,000,000",
      color: "rgb(43, 217, 255)",
      position:
        "md:absolute xl:left-[-347px] lg:left-[-24vw] md:left-[-28vw] md:top-[0]",
      connector: {
        svgProps: { width: "220", height: "46", viewBox: "0 0 220 46" },
        d: "M2 34.5L34.5 2H175.5L218 44.5",
        className: "right-[-150px] top-[-46px]",
      },
    },
    {
      percentage: 10,
      title: "Presale",
      amount: "100,000,000,000",
      color: "rgb(255, 255, 255)",
      position: "md:absolute md:left-[98%] md:top-[10px] max-md:order-3",
      connector: {
        svgProps: { width: "146", height: "68", viewBox: "0 0 146 68" },
        d: "M0.5 66H79.5L144 1.5",
        className: "left-[10px] bottom-[-90px]",
      },
    },
    {
      percentage: 15,
      title: "Marketing",
      amount: "150,000,000,000",
      color: "rgb(49, 106, 231)",
      position:
        "md:absolute xl:left-[-347px] lg:left-[-24vw] md:left-[-28vw] md:top-[60%] max-md:order-2",
    },
    {
      percentage: 15,
      title: "Liquidity",
      amount: "150,000,000,000",
      color: "rgb(254, 196, 33)",
      position:
        "md:absolute xl:left-[-347px] lg:left-[-24vw] md:left-[-28vw] md:bottom-[-10px] max-md:order-2",
      connector: {
        svgProps: { width: "217", height: "48", viewBox: "0 0 217 48" },
        d: "M215.5 2L171 46.5H30L2 18.5",
        className: "lg:right-[-220px] md:right-[-15vw] top-[56px]",
      },
    },
    {
      percentage: 20,
      title: "Product",
      amount: "200,000,000,000",
      color: "rgb(187, 206, 247)",
      position: "md:absolute md:left-[98%] md:bottom-[-10px]",
      connector: {
        svgProps: { width: "213", height: "88", viewBox: "0 0 213 88" },
        d: "M0.5 2H126.5L211 86.5",
        className: "left-[10px] top-[-96px]",
      },
    },
  ];

  return (
    <div
      id="tokenomics"
      className="relative bg-[#1249E2] md:min-h-screen mt-[-1px]"
    >
      {/* Top curved section */}
      <div className="w-full h-[180px] overflow-hidden absolute top-0 left-0 z-[1] max-md:hidden">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[3216px] h-[1500px] bg-white rounded-[100%]" />
      </div>

      {/* Title section */}
      <div className="flex flex-col text-primary max-md:bg-white items-center pb-[36px] relative z-[3] text-center gap-6 md:rounded-[100%]">
        <div className="text-[68px] bg-white font-extrabold leading-none capitalize max-w-[890px] max-md:text-[48px] max-md:leading-[52px] max-md:px-5 max-md:mt-6">
          Tokenomics
        </div>
      </div>

      {/* Main content */}
      <div className="relative md:size-[384px] lg:w-[596px] lg:h-[586px] mx-auto mt-[300px] max-md:mt-[50px] max-md:px-8 max-md:w-full max-md:h-auto max-md:flex max-md:flex-row max-md:justify-center max-md:flex-wrap max-md:gap-16 max-xxs:gap-10">
        {/* Pie chart for desktop */}
        <div className="md:size-full max-md:hidden">
          <img
            src="https://buy.dogizen.io/_next/image?url=%2Fimages%2Findex%2Ftoken%2Ftoken-pie.png&w=3840&q=75"
            alt="token pie chart"
            className="size-full max-md:block max-md:mx-auto max-md:w-[50vw]"
          />
        </div>

        {/* Token sections */}
        {sections.map((section, index) => (
          <div key={index} className={section.position}>
            <TokenSection {...section} isMobile={true}>
              {section.connector && (
                <ConnectorLine
                  path={{
                    ...section.connector,
                    className: section.connector.className,
                  }}
                />
              )}
            </TokenSection>
          </div>
        ))}
      </div>

      {/* Total supply section */}
      <div className="flex flex-col items-center pb-[40px] pt-[40px] text-center gap-2 md:pt-[200px] md:pb-[100px]">
        <p className="text-[#FEC421] leading-none text-[32px] font-bold md:text-[60px]">
          Total supply
        </p>
        <p className="text-white leading-none text-[40px] font-black md:text-[80px]">
          1,000,000,000,000
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
