import React from 'react';

export default function PlaywrightCard() {
  return (
    <div className="relative bg-gray-900/60 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-[#52c4c6]/10 transition-all duration-300 border border-gray-800">
      {/* Top accent border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
      
      <div className="p-6 sm:p-8">
        <div className="flex items-start mb-4">
          <div className="p-3 rounded-lg bg-gray-800/70 mr-4">
            {/* JavaScript logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 448 512" fill="#F7DF1E">
              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Playwright/Puppeteer Integration</h3>
        </div>
        
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
        Seamlessly integrate with Playwright or Puppeteer to automate complex web interactions and data extraction workflows.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a 
            href={process.env.NEXT_PUBLIC_INTEGRATION_NPM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors border border-red-600/70 shadow-sm shadow-red-900/30 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-transparent"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400 relative z-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0v24h24V0H0zm19.2 19.2h-2.4V9.6h-4.8v9.6H4.8V4.8h14.4v14.4z"/>
            </svg>
            <span className="relative z-10">NPM Package</span>
          </a>
          <a 
            href={process.env.NEXT_PUBLIC_INTEGRATION_GITHUB_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md border border-gray-700 hover:bg-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.83-.26.83-.57v-2c-3.34.73-4.03-1.6-4.03-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.72.09-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.3 3.48 1 .1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.3.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.26 1.98-.4 3-.4s2.04.14 3 .4c2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.76.84 1.23 1.9 1.23 3.22 0 4.6-2.8 5.63-5.48 5.92.43.38.82 1.13.82 2.26v3.35c0 .32.22.7.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}