import React from 'react';

export default function McpServerCard() {
  return (
    <div className="relative bg-gray-900/60 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-[#52c4c6]/10 transition-all duration-300 border border-gray-800">
      {/* Top accent border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-green-500"></div>
      
      <div className="p-6 sm:p-8">
        <div className="flex items-start mb-4">
          <div className="p-3 rounded-lg bg-gray-800/70 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">AI Agents with MCP Server</h3>
        </div>
        
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          Power your AI agents using MCP server. Enable your agents to browse, understand, and extract data.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a 
            href="https://www.npmjs.com/package/constellixai-mcp" 
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
            href="https://github.com/constellixai/mcp-server" 
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