import React from "react";

const SocialLink = ({ href, children }) => (
  <a
    className="flex items-center px-2 cursor-pointer gap-3"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <p className="w-[20px] scale-125">{children}</p>
  </a>
);

const Footer = () => {
  const socialLinks = [
    {
      href: "https://x.com/DogizenGame",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="fill-[#fff] group-hover:fill-primary"
        >
          <path
            fill="#fff"
            d="M13.3322 10.9283L18.5432 5H17.3082L12.7825 10.1471L9.16905 5H5L10.4659 12.784L5 19H6.23495L11.0141 13.5645L14.8309 19H19L13.3322 10.9283ZM11.6404 12.8519L11.0863 12.077L6.68 5.91H8.57737L12.1334 10.887L12.6867 11.6619L17.3089 18.1313H15.4123L11.6397 12.8526L11.6404 12.8519Z"
          />
        </svg>
      ),
    },
    {
      href: "https://linktr.ee/DogizenOfficial",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="fill-[#fff] group-hover:fill-primary"
        >
          <path
            fill="#fff"
            d="M10.7502 14.7744H13.2376V20H10.7502V14.7744ZM5 9.41836H9.2325L6.22361 6.7496L7.88853 5.15706L10.757 7.90044V4H13.2443V7.90044L16.1127 5.1633L17.7763 6.7496L14.7688 9.41211H19V11.6143H14.7447L17.7724 14.3514L16.1127 15.9067L12.0006 12.0622L7.88853 15.9067L6.22361 14.3577L9.25251 11.6205H5V9.41836Z"
          />
        </svg>
      ),
    },
    {
      href: "https://t.me/dogizen_official_presale",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="mx-[2px] fill-[#fff] group-hover:fill-primary"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#fff"
            d="M3.52703 8.60679C7.55273 6.77797 10.2327 5.56276 11.5784 4.97321C15.4086 3.30079 16.2137 3.01203 16.7313 3C16.8464 3 17.0994 3.02406 17.2719 3.16844C17.41 3.28876 17.4445 3.44518 17.4675 3.56549C17.4905 3.68581 17.5135 3.93848 17.4905 4.13098C17.2834 6.41702 16.3863 11.9636 15.9262 14.5144C15.7307 15.5972 15.3511 15.9582 14.983 15.9943C14.1779 16.0665 13.5683 15.4408 12.7977 14.9114C11.5784 14.0812 10.8998 13.5639 9.71511 12.7457C8.34637 11.8072 9.23203 11.2899 10.0142 10.4477C10.2212 10.2311 13.7523 6.86219 13.8213 6.5614C13.8328 6.5253 13.8328 6.38092 13.7523 6.30873C13.6718 6.23654 13.5568 6.2606 13.4648 6.28467C13.3382 6.30873 11.4059 7.65629 7.64475 10.3153C7.09265 10.7123 6.59807 10.9049 6.14949 10.8928C5.6549 10.8808 4.71174 10.6041 3.99861 10.3634C3.13596 10.0747 2.44584 9.91825 2.50335 9.41292C2.53786 9.14822 2.88292 8.88352 3.52703 8.60679Z"
          />
        </svg>
      ),
    },
    {
      href: "https://discord.com/invite/dogizen",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          className="mx-[4px] fill-[#fff] group-hover:fill-primary"
        >
          <path
            fill="#fff"
            d="M10.2667 0C10.1081 0.274839 9.96671 0.558676 9.8434 0.849968C8.6317 0.664559 7.39742 0.664559 6.18573 0.849968C6.06242 0.558676 5.92107 0.274839 5.76247 0C4.62108 0.188694 3.51149 0.526622 2.46418 1.00451C0.591377 3.61954 -0.257954 6.7943 0.0683309 9.96008C1.28881 10.8478 2.65861 11.5248 4.11732 11.9614C4.44947 11.5368 4.74591 11.0872 5.00378 10.6169C4.52786 10.4471 4.07043 10.2323 3.63815 9.97553C3.75671 9.8992 3.86886 9.81394 3.97357 9.72054C5.23415 10.308 6.61536 10.6131 8.01456 10.6131C9.41376 10.6131 10.795 10.308 12.0556 9.72054C12.1674 9.81326 12.2792 9.89826 12.391 9.97553C11.9563 10.2302 11.4994 10.4474 11.0253 10.6246C11.2725 11.1056 11.561 11.5657 11.8879 12C13.3447 11.565 14.7122 10.8878 15.9289 9.99871C16.263 6.83235 15.4129 3.655 13.533 1.04314C12.4975 0.555367 11.3988 0.20451 10.2667 0ZM5.36316 8.15196C4.96352 8.1242 4.59053 7.94773 4.3225 7.65958C4.05446 7.37143 3.91223 6.99402 3.92565 6.60657C3.9102 6.21861 4.05174 5.84012 4.32017 5.55153C4.58861 5.26295 4.96278 5.08704 5.36316 5.06117C5.76354 5.08704 6.13771 5.26295 6.40614 5.55153C6.67458 5.84012 6.81611 6.21861 6.80067 6.60657C6.81611 6.99453 6.67458 7.37302 6.40614 7.6616C6.13771 7.95018 5.76354 8.1261 5.36316 8.15196ZM10.666 8.15196C10.2663 8.1242 9.89334 7.94773 9.62531 7.65958C9.35728 7.37143 9.21504 6.99402 9.22846 6.60657C9.21302 6.21861 9.35455 5.84012 9.62299 5.55153C9.89142 5.26295 10.2656 5.08704 10.666 5.06117C11.0671 5.08511 11.4425 5.26045 11.7113 5.54948C11.9802 5.8385 12.121 6.21809 12.1035 6.60657C12.121 6.99504 11.9802 7.37463 11.7113 7.66366C11.4425 7.95268 11.0671 8.12803 10.666 8.15196Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#000] text-white py-12 px-16 max-lg:px-8 max-lg:py-11 font-nunito font-extrabold">
      {/* Logo */}
      <a className="cursor-pointer flex items-center">
        <img
          alt="Dogizen"
          src="https://buy.dogizen.io/_next/image?url=%2Fimages%2Flogo.png%3Fv%3D1&w=1920&q=75"
          className="w-[157px]"
        />
      </a>

      {/* Footer Content */}
      <div className="flex items-center max-lg:flex-col max-lg:items-start max-lg:gap-6 mt-9 max-lg:mt-5">
        {/* Social Links */}
        <div className="flex items-center gap-8 max-lg:gap-0 max-lg:ml-0 max-lg:justify-between max-lg:w-full">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} href={link.href}>
              {link.icon}
            </SocialLink>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1 max-lg:hidden">&nbsp;</div>

        {/* Copyright */}
        <p className="text-right ml-[60px] leading-4 text-xs max-lg:ml-0 max-lg:mb-0">
          © 2024 Dogizen All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
