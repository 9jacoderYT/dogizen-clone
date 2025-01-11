"use client";
import React, { useState } from "react";

const HowToBuy = () => {
  const [activeTab, setActiveTab] = useState("website");

  const websiteSteps = [
    {
      title: "Connect Your Crypto Wallet",
      description:
        'Choose the network you\'d like to use for purchasing DOGIZ—ETH, BSC, or SOL. Click "Connect Wallet" and approve the contract with your wallet provider, which will open automatically.',
    },
    {
      title: "Select Token and Amount",
      description:
        "Choose your desired token and enter the amount you wish to purchase. We recommend a minimum purchase of $500.",
    },
    {
      title: "Buy and Approve the Transaction",
      description:
        'Click "Buy Now" and follow the on-screen instructions from your wallet provider to approve the transaction. Please note, wallet approvals may take a few moments.',
    },
  ];

  const telegramSteps = [
    {
      title: "Access the Telegram Bot",
      description:
        "Join our Telegram bot and complete the onboarding process. Once inside, navigate to the buy menu.",
    },
    {
      title: "Enter Amount and Confirm Purchase",
      description:
        'Input the amount of DOGIZ you wish to buy. We recommend a minimum purchase of $500. Click "Buy" to proceed.',
    },
    {
      title: "Complete the Purchase",
      description:
        "Purchases through Telegram require Telegram stars, which can be bought with a card. Follow the on-screen prompts to purchase stars and finalize your transaction.",
    },
  ];

  const currentSteps = activeTab === "website" ? websiteSteps : telegramSteps;

  return (
    <div
      className="bg-gradient-to-b from-blue-600 to-blue-700 py-9 lg:py-24 text-white font-bold w-full overflow-hidden font-nunito"
      id="howtobuy"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl lg:text-7xl font-extrabold text-center mb-12 lg:mb-20">
          How To <span className="ml-2 text-yellow-400">Buy</span>
        </h2>

        <div className="flex items-center justify-center gap-5">
          <div
            onClick={() => setActiveTab("website")}
            className={`w-44 h-13 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:text-yellow-400 ${
              activeTab === "website"
                ? "text-yellow-400 bg-white/30"
                : "text-white/20 font-normal"
            }`}
          >
            Website
          </div>
          <div className="h-13 w-1.5 rounded-full bg-white"></div>
          <div
            onClick={() => setActiveTab("telegram")}
            className={`w-44 h-13 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:text-yellow-400 ${
              activeTab === "telegram"
                ? "text-yellow-400 bg-white/30"
                : "text-white/20 font-normal"
            }`}
          >
            Telegram
          </div>
        </div>

        <div className="pt-10">
          <div className="relative flex flex-col gap-7">
            <div className="flex items-center">
              <div className="flex-1">
                {currentSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative pl-20 py-7 lg:pl-16 text-base font-normal rounded-lg"
                  >
                    <span className="absolute left-0 top-7 w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-2xl text-gray-900">
                      {index + 1}
                    </span>
                    <h3 className="font-extrabold text-3xl capitalize leading-none mb-3">
                      {step.title}
                    </h3>
                    <div className="flex flex-col gap-2">
                      <p>{step.description}</p>
                    </div>
                    {index < currentSteps.length && (
                      <div className="absolute left-[17px] top-20 bottom-[-15px] w-2 rounded-full bg-white"></div>
                    )}
                  </div>
                ))}

                <div className="relative pl-20 py-7 lg:pl-16 text-base font-normal rounded-lg">
                  <span className="absolute left-0 top-7 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <svg
                      width="24"
                      height="21"
                      viewBox="0 0 24 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11.5L10 18.5L22 2.5"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="font-extrabold text-3xl capitalize leading-none mb-3">
                    <button className="cursor-pointer font-extrabold inline-flex items-center justify-center h-10 rounded-full bg-yellow-400 text-gray-900 text-xl leading-none px-6 uppercase">
                      Buy <span className="ml-2">DOGIZEN</span>
                    </button>
                  </h3>
                </div>
              </div>

              <img
                alt="how to buy"
                src={
                  activeTab === "website"
                    ? "https://buy.dogizen.io/_next/image?url=%2Fimages%2Findex%2Fhow-to-buy1.png&w=750&q=75"
                    : "https://buy.dogizen.io/_next/image?url=%2Fimages%2Findex%2Fhow-to-buy2.png&w=640&q=75"
                }
                className="hidden lg:block lg:mr-[-46px]"
                width={activeTab === "website" ? 368 : 368}
                height={activeTab === "website" ? 368 : 368}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
