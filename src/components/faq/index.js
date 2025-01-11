"use client";
import React, { useState } from "react";

const FAQ_DATA = [
  {
    question: "What is Dogizen?",
    answer:
      "With over 1 million users already on board, Dogizen is redefining the future of gaming on Telegram. It's more than a games platform; it's a community, a vision, and a revolution driven by those who believe in a new way to play in Web3.",
  },
  {
    question: "What Makes The First Telegram ICO Significant?",
    answer:
      "As the first-ever Telegram ICO, Dogizen is the first-ever crypto presale to utilise Telegram to allow buying DOGIZ without leaving the Telegram app. This opens up the Dogizen ICO to almost 1 billion users (who are often very into crypto!) who can then buy without any friction - an unprecedented innovation in Web3!",
  },
  {
    question: "Is the Dogizen smart contract audited?",
    answer: (
      <div>
        Yes! The Dogizen smart contract has been audited by German smart
        contract security company SolidProof, alongside team KYC and has
        successfully passed on all these fronts. You can view our contract audit{" "}
        <a
          href="https://github.com/solidproof/Projects/blob/main/2024/Dogizen/TON_Audit_SolidProof_Dogizen.pdf"
          target="_blank"
          className="underline cursor-pointer"
        >
          here
        </a>{" "}
        & our KYC certificate{" "}
        <a
          href="https://github.com/solidproof/Projects/blob/main/2024/Dogizen/TON_Audit_SolidProof_Dogizen.pdf"
          target="_blank"
          className="underline cursor-pointer"
        >
          here
        </a>
        .
      </div>
    ),
  },
  {
    question: "Where can I purchase DOGIZ?",
    answer:
      "You can purchase DOGIZ tokens only on the official Dogizen websites; https://dogizen.io, https://buy.dogizen.io & via Telegram on t.me/dogizen_official_robot.",
  },
  {
    question: "When will DOGIZ list?",
    answer:
      "DOGIZ will list after selling out all the presale tokens, which is projected to occur in Q1 2025.",
  },
  {
    question: "What exchanges will Dogizen list on?",
    answer:
      "Dogizen is in talks to list $DOGIZ on many exchanges, of which we unfortunately cannot reveal much more detail at the moment due to NDAs, all we can say is get hyped!",
  },
  {
    question: "When can I claim DOGIZ?",
    answer:
      "You can claim your $DOGIZ tokens upon TGE, which will be shortly after the presale closes, and alongside exchange listing.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="py-10 border-b-[2px] border-b-text max-lg:py-7 cursor-pointer">
      <div className="flex justify-between items-center" onClick={onClick}>
        <h4 className="text-[30px] leading-normal font-extrabold capitalize max-lg:text-[22px] max-lg:leading-[28px]">
          {question}
        </h4>
        <div
          className={`flex items-center cursor-pointer transition-all duration-300 ${
            isOpen ? "" : "-rotate-90"
          }`}
        >
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="54" height="54" rx="27" fill="#D9E2FF" />
            <path
              d="M28.2542 15.4961C28.2542 14.8057 27.6945 14.2461 27.0042 14.2461C26.3138 14.2461 25.7542 14.8057 25.7542 15.4961L28.2542 15.4961ZM26.1203 39.88C26.6084 40.3681 27.3999 40.3681 27.888 39.88L35.843 31.925C36.3311 31.4369 36.3311 30.6454 35.843 30.1573C35.3548 29.6691 34.5634 29.6691 34.0752 30.1573L27.0041 37.2283L19.9331 30.1573C19.4449 29.6691 18.6535 29.6691 18.1653 30.1573C17.6772 30.6454 17.6772 31.4369 18.1653 31.925L26.1203 39.88ZM25.7542 15.4961L25.7541 38.9961L28.2541 38.9961L28.2542 15.4961L25.7542 15.4961Z"
              fill="#0037CF"
            />
          </svg>
        </div>
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-linear ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } mt-4`}
      >
        <div className="min-h-[0px] overflow-hidden">
          <div className="">{answer}</div>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div
      id="faq"
      className="bg-faq py-[120px] max-lg:py-[90px] font-nunito text-base"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="w-full font-extrabold text-[60px] leading-none uppercase mb-16 text-center">
          FAQs
        </h2>
        <div className="flex flex-col">
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
