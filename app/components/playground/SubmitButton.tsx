'use client';

import React from 'react';

interface SubmitButtonProps {
  isLoading: boolean;
}

export default function SubmitButton({ isLoading }: SubmitButtonProps) {
  return (
    <div className="flex justify-end">
      <button
        type="submit"
        disabled={isLoading}
        className="px-5 py-2.5 mt-2 rounded-md bg-gray-800/40 border border-[#52c4c6]/40 
          text-[#52c4c6] text-sm font-medium hover:bg-gray-700/50 transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-4 w-4 text-[#52c4c6]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing
          </>
        ) : "Get Data"}
      </button>
    </div>
  );
}