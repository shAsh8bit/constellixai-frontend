'use client';

import React, { useState, useEffect } from 'react';

interface ControlPanelProps {
  url: string;
  setUrl: (url: string) => void;
  model: string;
  setModel: (model: string) => void;
  apiKey: string;
  setApiKey: (apiKey: string) => void;
  isLoading: boolean;
  isFetchingWebsite: boolean;
  onFetchWebsite: () => void;
  setQuery: (query: string) => void;
}

interface ExampleOption {
  name: string;
  url: string;
  query: string;
}

export default function ControlPanel({
  url,
  setUrl,
  model,
  setModel,
  apiKey,
  setApiKey,
  isLoading,
  isFetchingWebsite,
  onFetchWebsite,
  setQuery
}: ControlPanelProps) {
  const [selectedExample, setSelectedExample] = useState<ExampleOption | null>(null);
  
  const examples: ExampleOption[] = [
    {
      name: "https://www.producthunt.com/",
      url: "https://www.producthunt.com/",
      query: `{ 
  top_products_today[] {
    product_names, 
    product_description,
    comments(Number of comments),
    upvotes(Number),
  },
 top_products_yesterday(Just get the product's names)[],
 top_product_last_month {
   name,
   description
 }
}`
    }
  ];
  useEffect(() => {
    if (selectedExample) {
      setQuery(selectedExample.query);
      onFetchWebsite();
      setSelectedExample(null);
    }
  }, [selectedExample]);

  const handleExampleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    
    if (!selectedValue) return;
    
    const example = examples.find(ex => ex.url === selectedValue);
    
    if (example) {
      setSelectedExample(example);
      setUrl(example.url);
      e.target.value = "";
    }
  };

  return (
    <div className="flex flex-wrap gap-2 items-center justify-start">
      <div className="flex gap-2 items-center min-w-[220px] flex-wrap">
        <select
          id="examples"
          onChange={handleExampleSelect}
          value=""
          className="h-[38px] max-w-[120px] px-2 py-1 bg-gray-800/30 border border-gray-700/50 rounded-md text-white text-sm \
            focus:outline-none focus:ring-1 focus:ring-[#52c4c6]/30"
        >
          <option value="" disabled>Example</option>
          {examples.map((example, index) => (
            <option key={index} value={example.url}>{example.url}</option>
          ))}
        </select>

        <div className="flex items-center bg-gray-800/30 border border-gray-700/50 rounded-md px-2 w-full sm:w-64">
          <span className="text-gray-400 text-xs mr-1 whitespace-nowrap">URL:</span>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && url) {
                e.preventDefault();
                onFetchWebsite();
              }
            }}
            placeholder="https://example.com"
            autoComplete="off"
            className="flex-1 px-2 py-2 bg-transparent text-white \
              placeholder-gray-500 focus:outline-none text-sm"
          />
        </div>
        <button
          type="button"
          onClick={onFetchWebsite}
          disabled={!url || isFetchingWebsite}
          className="px-3 py-2 rounded-md bg-gray-800/40 border border-[#52c4c6]/40 \
            text-[#52c4c6] text-sm font-medium hover:bg-gray-700/50 transition-colors\
            disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isFetchingWebsite ? (
            <>
              <svg className="animate-spin h-4 w-4 text-[#52c4c6]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Fetching...
            </>
          ) : "Fetch Website"}
        </button>
      </div>
      
      <div className="flex gap-2 h-[38px] flex-wrap">
        <select
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="px-2 py-2 bg-gray-800/30 border border-gray-700/50 rounded-md text-white text-sm\
            focus:outline-none focus:ring-1 focus:ring-[#52c4c6]/30"
        >
          <option value="gemini">Gemini</option>
        </select>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 flex-wrap">
            <input
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="API Key"
              autoComplete="off"
              className="px-3 py-2 bg-gray-800/30 border border-gray-700/50 rounded-md text-white text-sm min-w-[100px] max-w-full\
                placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#52c4c6]/30 flex-shrink-0"
            />
            <button
              type="button"
              onClick={() => window.open('https://ai.google.dev/gemini-api/docs/api-key', '_blank')}
              className="px-2 py-1 rounded-md bg-gray-800 hover:bg-gray-700 \
                text-[#52c4c6] text-xs font-medium hover:text-[#6eebed] transition-colors shadow-sm \
                flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
              </svg>
              Get API Key
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
                <path d="M7 17l9.2-9.2M17 17V7H7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}