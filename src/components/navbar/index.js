"use client";
import React, { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { title: "Buy", href: "#buy" },
    { title: "Vision", href: "#vision" },
    { title: "How To Buy", href: "#howtobuy" },
    { title: "Roadmap", href: "#roadmap" },
    { title: "Tokenomics", href: "#tokenomics" },
    { title: "FAQ", href: "#faq" },
    { title: "Stake", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#a4b7ffd9] backdrop-blur-lg shadow-lg z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-800 hover:bg-blue-200 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold">
              <img
                src="https://buy.dogizen.io/_next/image?url=%2Fimages%2Flogo.png%3Fv%3D1&w=1920&q=75"
                className="w-36"
              />
            </span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
              >
                {link.title}
              </a>
            ))}

            {/* Socials Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                Socials
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Discord
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Telegram
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Connect Wallet Button */}
          <div className="flex items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 hover:bg-blue-200"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
