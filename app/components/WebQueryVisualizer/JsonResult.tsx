import React, { useState } from 'react';

interface JsonResultProps {
  jsonData: any;
  copied: boolean;
  handleCopyJSON: () => void;
}

const JsonResult: React.FC<JsonResultProps> = ({ jsonData, copied, handleCopyJSON }) => {
    const [activeTab, setActiveTab] = useState<'Data' | 'Selectors' | 'Elements'>('Data');
  return (
    <div className="absolute bottom-[0%] left-[0%] w-[45%] bg-gray-900 rounded-lg shadow-xl border border-[#52c4c6]/30 p-2 sm:p-4 z-20">
      <div className="flex items-center w-full bg-gray-800/30 rounded-md border border-gray-700/50 p-0.5 md:font-mono relative">
        {/* Animated slider background */}
        <div 
          className="absolute h-[80%] rounded-sm bg-[#52c4c6]/20 transition-all duration-300 ease-in-out"
          style={{ 
            width: 'calc(100% / 3)', 
            left: activeTab === 'Data' 
              ? '1%' 
              : activeTab === 'Selectors' 
                ? 'calc(100% / 3)' 
                : 'calc(100% / 3 * 1.97)' 
          }}
        ></div>
            <button
            type="button"
            onClick={() => setActiveTab('Data')}
            className={`flex-1 px-0.5 md:px-1 lg:px-2 xl:px-3 py-1 text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs rounded-sm transition-colors relative z-10 ${
              activeTab === 'Data' 
                ?  "text-[#52c4c6]"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Data
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('Selectors')}
            className={`flex-1 px-0.5 md:px-1 lg:px-2 xl:px-3 py-1 text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs rounded-sm transition-colors relative z-10 ${
              activeTab === 'Selectors' 
                ? "text-[#52c4c6]"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Selectors
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('Elements')}
            className={`flex-1 px-0.5 md:px-1 lg:px-2 xl:px-3 py-1 text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs rounded-sm transition-colors relative z-10 ${
              activeTab === 'Elements' 
                ? "text-[#52c4c6]"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Elements
          </button>
          </div>
      <div className="bg-black/50 p-1 sm:p-3 rounded font-mono text-[8px] xs:text-[10px] sm:text-xs overflow-y-auto max-h-[300px]">
        {activeTab === 'Data' && (
          <>
            <pre className="text-green-400">{'{'}</pre>
            <pre className="text-white ml-2 sm:ml-4">"products": [</pre>
            <pre className="text-white ml-4 sm:ml-8">{'{'}</pre>
            <pre className="text-white ml-6 sm:ml-12">"name": <span className="text-yellow-300">"Product 1"</span>,</pre>
            <pre className="text-white ml-6 sm:ml-12">"price": <span className="text-blue-400">2,299</span>,</pre>
            <pre className="text-white ml-6 sm:ml-12">"description": <span className="text-yellow-300">"High quality item..."</span></pre>
            <pre className="text-white ml-4 sm:ml-8">{'},'}</pre>
            <pre className="text-white ml-4 sm:ml-8">{'{'}</pre>
            <pre className="text-white ml-6 sm:ml-12">"name": <span className="text-yellow-300">"Product 2"</span>,</pre>
            <pre className="text-white ml-6 sm:ml-12">"price": <span className="text-blue-400">3,499</span>,</pre>
            <pre className="text-white ml-6 sm:ml-12">"description": <span className="text-yellow-300">"Premium product..."</span></pre>
            <pre className="text-white ml-4 sm:ml-8">{'}'}</pre>
            <pre className="text-white ml-2 sm:ml-4">]</pre>
            <pre className="text-green-400">{'}'}</pre>
          </>
        )}
        
        {activeTab === 'Selectors' && (
          <>
            <pre className="text-green-400">{'{'}</pre>
            <pre className="text-white ml-2 sm:ml-4">"products": [</pre>
            <pre className="text-white ml-4 sm:ml-8">{'{'}</pre>
            <pre className="text-white ml-6 sm:ml-12">"name": <span className="text-yellow-300">"div.product-container &gt; h1:nth-child(1)"</span>,</pre>
            <pre className="text-white ml-6 sm:ml-12">"price": <span className="text-blue-400">"div.pricing &gt; span:nth-child(2)"</span>,</pre>
            <pre className="text-white ml-6 sm:ml-12">"description": <span className="text-yellow-300">"div.main-content &gt; p.desc:nth-of-type(1)"</span></pre>
            <pre className="text-white ml-4 sm:ml-8">{'},'}</pre>
            <pre className="text-white ml-4 sm:ml-8">{'{'}</pre>
            <pre className="text-white ml-6 sm:ml-12">"name": <span className="text-yellow-300">"section.product-v2 &gt; .title"</span>,</pre>
            <pre className="text-white ml-6 sm:ml-12">"price": <span className="text-blue-400">"section.product-v2 &gt; .price-box &gt; .current-price"</span>,</pre>
            <pre className="text-white ml-6 sm:ml-12">"description": <span className="text-yellow-300">"section.product-v2 &gt; .details &gt; .full-description"</span></pre>
            <pre className="text-white ml-4 sm:ml-8">{'}'}</pre>
            <pre className="text-white ml-2 sm:ml-4">]</pre>
            <pre className="text-green-400">{'}'}</pre>
          </>
        )}
        
        {activeTab === 'Elements' && (
          <>
            <pre className="text-green-400">{'{'}</pre>
            <pre className="text-white ml-2 sm:ml-4">"products": [</pre>
            <pre className="text-white ml-4 sm:ml-8">{'{'}</pre>
            <pre className="text-white ml-6 sm:ml-12">"name": <span className="text-gray-300">{'{HtmlElement}'}</span>,</pre>
            <pre className="text-white ml-6 sm:ml-12">"price": <span className="text-gray-400">{'{HtmlElement}'}</span>,</pre>
            <pre className="text-white ml-6 sm:ml-12">"description": <span className="text-gray-300">{'{HtmlElement}'}</span></pre>
            <pre className="text-white ml-4 sm:ml-8">{'},'}</pre>
            <pre className="text-white ml-4 sm:ml-8">{'{'}</pre>
            <pre className="text-white ml-6 sm:ml-12">"name": <span className="text-gray-300">{'{HtmlElement}'}</span>,</pre>
            <pre className="text-white ml-6 sm:ml-12">"price": <span className="text-gray-400">{'{HtmlElement}'}</span>,</pre>
            <pre className="text-white ml-6 sm:ml-12">"description": <span className="text-gray-300">{'{HtmlElement}'}</span></pre>
            <pre className="text-white ml-4 sm:ml-8">{'}'}</pre>
            <pre className="text-white ml-2 sm:ml-4">]</pre>
            <pre className="text-green-400">{'}'}</pre>
          </>
        )}
      </div>
    </div>
  );
};

export default JsonResult;