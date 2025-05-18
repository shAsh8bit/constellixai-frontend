import React from 'react';

interface BrowserWindowProps {
  url?: string;
}

const BrowserWindow: React.FC<BrowserWindowProps> = ({ url = "https://constellixai.com/products" }) => {
  return (
    <div className="absolute top-[25%] right-[0%] w-[50%] h-[300px] bg-gray-900 rounded-lg shadow-2xl border border-[#52c4c6]/30 overflow-hidden z-10">
      {/* Browser header - simplified to match Query/JSON components */}
      <div className="h-6 sm:h-8 bg-black flex items-center px-2 sm:px-4 border-b border-[#52c4c6]/20">
        <div className="flex gap-1 sm:gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mx-auto bg-black/70 rounded-full px-2 sm:px-4 py-0.5 sm:py-1 text-[10px] sm:text-xs text-gray-300 max-w-[80%] truncate border border-[#52c4c6]/20">
          {url}
        </div>
        <div className="text-[10px] sm:text-xs text-[#52c4c6] ml-2 font-mono">Browser</div>
      </div>
      
      {/* Browser content - simplified to match QuerySection/JsonResult styling */}
      <div className="h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] p-2 sm:p-3 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden relative">
        {/* Accent color blob - minimal version */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-radial from-[#52c4c6]/20 to-transparent rounded-full blur-2xl opacity-20"></div>
        
        {/* Header bar - matching the header style in QuerySection/JsonResult */}
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <p className="text-xs sm:text-sm text-[#52c4c6] font-mono"></p>
          <div className="bg-[#52c4c6]/20 text-[#52c4c6] text-[10px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded">
            2 items
          </div>
        </div>
        
        {/* Product list - styled to match the JSON structure */}
        <div className="bg-black/50 p-2 sm:p-3 rounded font-mono border border-gray-800 mb-3 sm:mb-4">
          {/* Product 1 - matching JSON data */}
          <div className="mb-2 sm:mb-3 border-b border-gray-800 pb-2">
            <div className="flex justify-between items-center">
              <div className="text-[10px] sm:text-xs text-white font-medium">Product 1</div>
              <div className="text-[10px] sm:text-xs text-blue-400 font-medium">₹2,299</div>
            </div>
            <div className="text-[8px] sm:text-[10px] text-gray-400 mt-0.5">High quality item...</div>
          </div>
          
          {/* Product 2 - matching JSON data */}
          <div>
            <div className="flex justify-between items-center">
              <div className="text-[10px] sm:text-xs text-white font-medium">Product 2</div>
              <div className="text-[10px] sm:text-xs text-blue-400 font-medium">₹3,499</div>
            </div>
            <div className="text-[8px] sm:text-[10px] text-gray-400 mt-0.5">Premium product...</div>
          </div>
        </div>
        
        {/* Loading/Shimmer sections */}
        <div className="space-y-2 sm:space-y-3">
          {/* Shimmering section 1 */}
          <div className="animate-pulse bg-black/30 rounded p-2 border border-gray-800/50">
            <div className="h-2 bg-gray-800/70 rounded w-1/3 mb-1"></div>
            <div className="h-1 bg-gray-800/70 rounded w-full mb-1"></div>
            <div className="h-1 bg-gray-800/70 rounded w-2/3"></div>
          </div>
          
          {/* Shimmering section 2 */}
          <div className="animate-pulse bg-black/30 rounded p-2 border border-gray-800/50">
            <div className="h-2 bg-gray-800/70 rounded w-2/5 mb-1"></div>
            <div className="h-1 bg-gray-800/70 rounded w-full mb-1"></div>
            <div className="h-1 bg-gray-800/70 rounded w-3/4"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BrowserWindow;