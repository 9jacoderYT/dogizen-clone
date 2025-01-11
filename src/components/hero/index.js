"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [paymentAmount, setPaymentAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const DOGIZ_PRICE = 0.000081;
  const cryptoOptions = [
    {
      id: "btc",
      name: "Bitcoin",
      symbol: "BTC",
      price: 95000,
    },
    {
      id: "eth",
      name: "Ethereum",
      symbol: "ETH",
      price: 3500,
    },
    {
      id: "sol",
      name: "Solana",
      symbol: "SOL",
      price: 180,
    },
  ];

  const handlePaymentChange = (e) => {
    const value = e.target.value;
    setPaymentAmount(value);
    if (!value) {
      setReceiveAmount("");
      return;
    }
    if (selectedCrypto) {
      const calculatedDogiz =
        (parseFloat(value) * selectedCrypto.price) / DOGIZ_PRICE;
      setReceiveAmount(calculatedDogiz.toFixed(0));
    }
  };

  const handleReceiveChange = (e) => {
    const value = e.target.value;
    setReceiveAmount(value);
    if (!value) {
      setPaymentAmount("");
      return;
    }
    if (selectedCrypto) {
      const calculatedPayment =
        (parseFloat(value) * DOGIZ_PRICE) / selectedCrypto.price;
      setPaymentAmount(calculatedPayment.toFixed(8));
    }
  };

  const handleCryptoSelect = (crypto) => {
    setSelectedCrypto(crypto);
    setIsDropdownOpen(false);

    if (paymentAmount) {
      const calculatedDogiz =
        (parseFloat(paymentAmount) * crypto.price) / DOGIZ_PRICE;
      setReceiveAmount(calculatedDogiz.toFixed(0));
    } else if (receiveAmount) {
      const calculatedPayment =
        (parseFloat(receiveAmount) * DOGIZ_PRICE) / crypto.price;
      setPaymentAmount(calculatedPayment.toFixed(8));
    }
  };

  return (
    <div
      id="trade"
      className="relative lg:h-[calc(100vh-230px)] md:min-h-[800px] overflow-hidden pt-[72px] max-md:pt-[80px]"
    >
      {/* Background setup */}
      <div
        className="absolute inset-0 bg-[#D9E2FF] md:bg-bottom bg-repeat-x max-md:bg-[#adbfff] pb-[22px] md:pb-[50px]"
        style={{
          backgroundImage: "url('/images/presale/bg2.png')",
          backgroundSize: "contain",
        }}
      />

      {/* Floating Clouds */}
      <img
        src="/cloud1.webp"
        alt="Cloud 1"
        className="absolute top-[10%] right-[20%] w-[150px] h-auto animate-float"
      />
      <img
        src="/cloud2.webp"
        alt="Cloud 2"
        className="absolute top-[20%] left-[20%] w-[87px] h-auto animate-float2"
      />
      <img
        src="/cloud3.webp"
        alt="Cloud 3"
        className="absolute top-[30%] left-[50%] w-[130px] h-auto animate-float"
      />
      <img
        src="/cloud4.webp"
        alt="Cloud 4"
        className="absolute top-[40%] right-[10%] w-[146px] h-auto animate-float2"
      />
      <img
        src="/cloud5.webp"
        alt="Cloud 5"
        className="absolute top-[50%] left-[30%] w-[134px] h-auto animate-float 
                  max-md:top-[80%] max-md:w-[100px] max-md:left-[10%]"
      />

      {/* Centered Dog Animation */}
      <img
        src="https://cdn.dogizen.net/dog.gif"
        alt="Dogizen"
        className="md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-[5vh] 
                  md:w-[20%] h-auto max-xl:hidden z-20 max-w-[300px]"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex justify-between md:pt-[30px] max-md:flex-col font-sans p-5">
        {/* Left Column */}
        <div className="max-md:hidden relative w-[469px] xl:w-[677px] flex flex-col pt-10 gap-7">
          <h1 className="text-[53px] xl:text-[75px] leading-none font-black">
            The First <span className="text-blue-500">Telegram</span> ICO
          </h1>

          <p className="text-[23px] xl:text-[26px] leading-[32px] max-w-[443px] xl:max-w-[476px] font-bold">
            Make history with 1 million users in the first-ever Telegram ICO,
            launching next-gen gaming today.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://whitepaper.dogizen.io/"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-extrabold uppercase hover:bg-blue-700 transition-colors"
            >
              Whitepaper
            </a>
            <a
              href="#"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-extrabold uppercase hover:bg-blue-50 transition-colors"
            >
              Buy In <b className="font-extrabold uppercase ml-2">Telegram</b>
            </a>
          </div>

          <div className="flex items-center gap-10 max-w-[60%]">
            <div className="flex flex-col">
              <p className="text-[22px] capitalize font-bold md:text-[30px] leading-[1.1] my-2">
                Live Users:
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <b className="text-[22px] leading-none md:text-[28px]">
                  <span>9,421</span>
                </b>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Trade Form */}
        <div className="w-full md:w-[371px] lg:w-[468px] flex-shrink-0">
          <div className="mx-auto w-full max-lg:max-w-[400px] flex-col z-20 text-white bg-slate-900 rounded-[40px] overflow-hidden shadow-xl">
            {/* Form Header */}
            <div className="relative bg-slate-800 flex items-center justify-center h-[57px] max-lg:h-[54px] border-b-[3px] border-white">
              <span className="text-yellow-400 mr-2 font-black text-[21px] uppercase">
                Presale
              </span>
              <span className="font-black text-[21px] uppercase">Active</span>
            </div>

            {/* Form Content */}
            <div className="px-8 pt-5 pb-[70px] max-lg:px-4 max-lg:pb-[70px]">
              <p className="text-center text-base font-extrabold">RAISED</p>
              <p className="text-4xl font-extrabold max-lg:text-[28px] tracking-tighter flex justify-center leading-none">
                <span>$2,894,098</span>
                <span className="mx-2">/</span>
                <span className="text-yellow-400">$3,020,000</span>
              </p>

              <p className="text-center text-lg font-bold mt-2 max-lg:mt-4">
                Buy in before price increases!
              </p>

              {/* Progress Bar */}
              <div className="relative bg-blue-600 rounded-xl p-4 mt-3 mb-5">
                <div className="h-5 bg-slate-900 rounded-full overflow-hidden p-1">
                  <div className="h-full bg-yellow-400 rounded-full w-[95.8%]" />
                </div>
                <div className="flex items-center text-xs font-bold justify-between mt-2">
                  <p>Current Price: $0.000081</p>
                  <p>
                    Next Stage Price:{" "}
                    <span className="text-yellow-200">$0.000085</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Trade Form */}
            <div className="px-8 pb-8 pt-0 bg-black max-lg:px-4">
              <div className="flex -mt-[68px] flex-col text-black mb-6 bg-white rounded-xl pt-4 pb-5 px-5">
                {/* Pay Section */}
                <div>
                  <div className="flex justify-between items-center text-sm opacity-70">
                    <p className="text-sm font-semibold capitalize">You pay</p>
                    {selectedCrypto && (
                      <p className="text-sm font-semibold">
                        1 {selectedCrypto.symbol} = $
                        {selectedCrypto.price.toLocaleString()}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <input
                      type="number"
                      placeholder="0"
                      value={paymentAmount}
                      onChange={handlePaymentChange}
                      className="w-full font-extrabold text-3xl h-7 bg-transparent outline-none"
                    />
                    <div className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="h-10 flex items-center justify-center px-4 rounded-full font-black text-sm bg-yellow-400 hover:opacity-80 transition-all duration-200 uppercase"
                      >
                        {selectedCrypto
                          ? selectedCrypto.symbol
                          : "Select Payment"}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1">
                            {cryptoOptions.map((crypto) => (
                              <button
                                key={crypto.id}
                                onClick={() => handleCryptoSelect(crypto)}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold"
                              >
                                {crypto.name} ({crypto.symbol})
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-black my-5" />

                {/* Receive Section */}
                <div>
                  <div className="flex justify-between items-center text-sm opacity-70">
                    <p className="text-sm font-semibold capitalize">
                      You receive
                    </p>
                    <p className="text-sm font-semibold">
                      1 DOGIZ = ${DOGIZ_PRICE}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <input
                      type="number"
                      placeholder="0"
                      value={receiveAmount}
                      onChange={handleReceiveChange}
                      className="w-full font-extrabold text-3xl h-7 bg-transparent outline-none"
                    />
                    <button className="flex items-center gap-1 hover:bg-black/20 px-1 transition-all duration-200 rounded-full">
                      <div className="w-8 h-8 bg-blue-600 rounded-full" />
                      <span className="text-base font-black uppercase">
                        DOGIZ
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <button className="w-full h-[58px] bg-yellow-400 text-black font-black text-[22px] rounded-full uppercase hover:opacity-80 transition-all duration-200">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
