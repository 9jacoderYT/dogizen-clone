import React from "react";

const PartnersSlider = () => {
  const partners = [
    {
      name: "cointelegraph",
      title: "The First Telegram ICO",
      imageUrl:
        "https://buy.dogizen.io/_next/image?url=%2Fimages%2Fmedia%2Fcointelegraph.svg&w=384&q=75",
      width: 170,
      height: 40,
    },
    {
      name: "beincrypto",
      title: "1m+ users",
      imageUrl:
        "https://buy.dogizen.io/_next/image?url=%2Fimages%2Fmedia%2Fbeincrypto.svg&w=384&q=75",
      width: 193,
      height: 40,
    },
    {
      name: "bitcoin",
      title: "First ICO on Telegram",
      imageUrl:
        "https://buy.dogizen.io/_next/image?url=%2Fimages%2Fmedia%2Fbitcoin.svg&w=384&q=75",
      width: 193,
      height: 40,
    },
    {
      name: "msn",
      title: "First on Telegram ecosystem",
      imageUrl:
        "https://buy.dogizen.io/_next/image?url=%2Fimages%2Fmedia%2Fmsn.svg&w=384&q=75",
      width: 178,
      height: 40,
    },
    {
      name: "btc-echo",
      title: "Hamster Kombat Challenger",
      imageUrl:
        "https://buy.dogizen.io/_next/image?url=%2Fimages%2Fmedia%2Fbtc-echo.svg&w=384&q=75",
      width: 177,
      height: 36,
    },
    {
      name: "coinspeaker",
      title: "First ICO By Viral Game",
      imageUrl:
        "https://buy.dogizen.io/_next/image?url=%2Fimages%2Fmedia%2Fcoinspeaker.svg&w=384&q=75",
      width: 175,
      height: 43,
    },
    {
      name: "cryptonomist",
      title: "Dogizen Sets History",
      imageUrl:
        "https://buy.dogizen.io/_next/image?url=%2Fimages%2Fmedia%2Fcryptonomist.svg&w=384&q=75",
      width: 188,
      height: 42,
    },
    {
      name: "cryptonews",
      title: "100x Is In Sight",
      imageUrl:
        "https://buy.dogizen.io/_next/image?url=%2Fimages%2Fmedia%2Fcryptonews.svg&w=384&q=75",
      width: 136,
      height: 44,
    },
  ];

  return (
    <div className="overflow-x-hidden bg-[#1A1A1A] w-full">
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="w-full flex-shrink-0"
              style={{ width: "300px" }}
            >
              <div className="h-60 max-lg:h-48 flex flex-col gap-4 max-lg:gap-3 items-center justify-center">
                <div className="flex items-center justify-center h-10">
                  <img
                    alt={partner.name}
                    src={partner.imageUrl}
                    width={partner.width}
                    height={partner.height}
                    className="object-contain"
                  />
                </div>
                <h4 className="flex w-full items-center justify-center h-12 text-[#CED9FF] text-center font-bold text-xl leading-6 max-w-[210px] capitalize">
                  {partner.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSlider;
