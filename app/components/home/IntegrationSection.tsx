import React from 'react';
import PlaywrightCard from './integrations/PlaywrightCard';
import McpServerCard from './integrations/McpServerCard';

export default function IntegrationSection() {
  return (
    <section className="container mx-auto py-10 sm:py-16 px-4 sm:px-6 max-w-7xl">
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-xl overflow-hidden">
        <div className="py-6 px-4 sm:px-8 md:px-10 bg-gradient-to-r from-[#52c4c6]/10 to-transparent">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            <span className="text-[#52c4c6]">Automate</span> Web Flows & Data Extraction
          </h2>
          <p className="text-gray-300 text-center mt-2">
            Simulate user actions, extract data, identify elements and handle ever-changing page structures with ease
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 p-4 sm:p-8">
          {/* Playwright/Puppeteer Integration Card */}
          <PlaywrightCard />
          
          {/* MCP Server Card */}
          <McpServerCard />
        </div>
        
        <div className="p-4 sm:p-6 bg-gradient-to-r from-gray-900/80 to-black/60 text-center">
          <p className="text-sm text-gray-400">Want to learn more about implementation details?</p>
          <a href="/docs" className="text-[#52c4c6] hover:underline text-sm font-medium inline-flex items-center gap-1 mt-1">
            Visit GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}