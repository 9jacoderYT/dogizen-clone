"use client";

import React from "react";

const FloatingCredit = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white shadow-xl animate-bounce-slow">
      <div className="flex flex-col gap-3">
        {/* Profile Image and Title */}
        <div className="flex items-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/117041814?v=4"
            alt="9jaCoder"
            className="w-12 h-12 rounded-full border-2 border-[#FEC421] object-cover"
          />
          <div className="text-sm font-semibold text-[#FEC421]">
            Designed by 9jaCoder
          </div>
        </div>

        {/* Links Container */}
        <div className="flex flex-col gap-2 text-sm">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@9jaCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#FEC421] transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            <span>Watch Tutorial</span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/YT_9jacoder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#FEC421] transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
            <span>Contact on Telegram</span>
          </a>

          {/* Get Source Code */}
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
            <a
              href="https://www.youtube.com/@9jaCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FEC421] hover:text-white transition-colors text-xs flex items-center gap-1"
            >
              Get Source Code
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCredit;
