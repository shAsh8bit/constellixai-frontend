'use client';

import React from 'react';

interface QueryEditorProps {
  query: string;
  setQuery: (query: string) => void;
  queryMode: 'natural' | 'structured';
  setQueryMode: (mode: 'natural' | 'structured') => void;
  onShowTutorial: () => void;
}

export default function QueryEditor({ 
  query, 
  setQuery, 
  queryMode, 
  setQueryMode,
  onShowTutorial
}: QueryEditorProps) {
  const handleModeSwitch = (mode: 'natural' | 'structured') => {
    if (mode !== queryMode) {
      setQuery('');
      setQueryMode(mode);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
        <label htmlFor="query" className="text-[#52c4c6] text-xs font-medium">
          Query
        </label>

        <div className="flex flex-wrap items-center gap-2">
          {queryMode === "structured" && (
            <button
              type="button"
              onClick={onShowTutorial}
              className="px-4 py-1 text-sm bg-[#1e2021] 
                text-[#6a8fff] rounded-md transition-all font-medium
                flex items-center shadow-md border border-[#3a4048] hover:bg-[#2a2f36] hover:border-[#6a8fff]/50"
              title="New to structured queries? Click to learn how they work"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
             What is structured query?
            </button>
          )}

          <div className="flex items-center bg-gray-800/30 rounded-md border border-gray-700/50 p-0.5">
            <button
              type="button"
              onClick={() => handleModeSwitch("natural")}
              className={`px-3 py-1 text-xs rounded-sm transition-colors ${
                queryMode === "natural"
                  ? "bg-[#52c4c6]/20 text-[#52c4c6]"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Natural Language
            </button>
            <button
              type="button"
              onClick={() => handleModeSwitch("structured")}
              className={`px-3 py-1 text-xs rounded-sm transition-colors ${
                queryMode === "structured"
                  ? "bg-[#52c4c6]/20 text-[#52c4c6]"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Structured Query
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <textarea
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            queryMode === "natural"
              ? "Get me all product prices and descriptions"
              : `{\n  products[] {\n    name,\n    price,\n    description\n  }\n}`
          }
          spellCheck={queryMode === "natural"}
          className={`w-full h-[calc(9/16*100%)] min-h-[320px] px-4 py-3 bg-gray-800/20 border border-gray-700/50 rounded-md 
            text-white placeholder-gray-500 focus:outline-none focus:ring-1 
            focus:ring-[#52c4c6]/30 focus:border-[#52c4c6]/20 resize-none text-sm shadow-inner`}
          required
        />
      </div>
    </div>
  );
}