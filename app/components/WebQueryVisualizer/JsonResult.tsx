import React from 'react';

interface JsonResultProps {
  jsonData: any;
  copied: boolean;
  handleCopyJSON: () => void;
}

const JsonResult: React.FC<JsonResultProps> = ({ jsonData, copied, handleCopyJSON }) => {
  return (
    <div className="absolute bottom-[0%] left-[0%] w-[45%] bg-gray-900 rounded-lg shadow-xl border border-[#52c4c6]/30 p-2 sm:p-4 z-20">
      <div className="flex justify-between items-center mb-1 sm:mb-2">
        <p className="text-xs sm:text-sm text-[#52c4c6] font-mono">JSON Result</p>
        <div className="bg-[#52c4c6]/20 text-[#52c4c6] text-[10px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded">Success</div>
      </div>
      <div className="bg-black/50 p-1 sm:p-3 rounded font-mono text-[8px] xs:text-[10px] sm:text-xs overflow-y-auto max-h-[300px]">
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
      </div>
    </div>
  );
};

export default JsonResult;