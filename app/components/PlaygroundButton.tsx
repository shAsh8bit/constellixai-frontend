'use client';

import { sendGAEvent } from "@next/third-parties/google";

export default function PlaygroundButton() {
  return (
    <a
      href="/playground"
      className="group px-6 md:px-8 py-3 rounded-full 
      bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
      text-[#52c4c6] font-medium text-lg 
      transition-all duration-200 ease-in-out
      border border-[#52c4c6]/30
      shadow-md shadow-black/50
      inline-flex items-center gap-2"
      onClick={() => {
        sendGAEvent({
          event: 'button_click',
          value: 'try_playground'
        });
      }}
    >
      <span>Try Playground</span>
      <svg 
        className="w-5 h-5 text-[#52c4c6] transition-transform duration-200 group-hover:translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M13 7l5 5m0 0l-5 5m5-5H6" 
        />
      </svg>
    </a>
  );
}
