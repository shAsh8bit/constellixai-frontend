import React from 'react';
import { useToast } from '../ui/Toast';

interface QuerySectionProps {
  queryType: 'natural' | 'structured';
  queries: {
    natural: string;
    structured: string;
  };
  setQueryType: (type: 'natural' | 'structured') => void;
  queryCopied: boolean;
  handleCopyQuery: () => void;
}

const QuerySection: React.FC<QuerySectionProps> = ({ 
  queryType, 
  queries, 
  setQueryType, 
  handleCopyQuery 
}) => {
  const { showToast } = useToast();

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleCopyQuery();
    showToast('Query copied to clipboard!', 'success');
  };

  return (
    <div className="absolute top-[0%] left-[0%] w-[45%] bg-gray-900 rounded-lg shadow-xl border border-[#52c4c6]/30 p-2 sm:p-4 z-20">
      <div className="flex justify-between items-center mb-1 sm:mb-2">
        <p className="text-xs sm:text-sm text-[#52c4c6] font-mono">Query Options</p>
        {/* <div className="bg-[#52c4c6]/20 text-[#52c4c6] text-[10px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded">
          {queryType === 'natural' ? 'Natural Language' : 'Structured'}
        </div> */}
      </div>
      
      <div className="flex flex-col gap-1 sm:gap-1 mb-2">
        {/* Natural language query */}
        <div 
          className={`bg-black/50 p-2 rounded border border-gray-700 transition-all`}
          onClick={() => setQueryType('natural')}
        >
          <p className="text-[10px] sm:text-xs text-gray-400 mb-1">Natural Language</p>
          <p className="text-[10px] sm:text-[13px] text-white font-medium">
            {queries.natural}
          </p>
        </div>
        
        {/* "OR" between query options */}
        <div className="flex items-center justify-center">
          <span className="text-[#52c4c6] text-xs sm:text-sm font-medium">OR</span>
        </div>
        
        {/* Structured query */}
        <div 
          className={`bg-black/50 p-2 rounded border border-gray-700 transition-all`}
          onClick={() => setQueryType('structured')}
        >
          <div className="flex justify-between items-center">
            <p className="text-[10px] sm:text-xs text-gray-400 mb-1">Structured</p>
            <button 
              onClick={handleCopy}
              className="text-gray-400 hover:text-[#52c4c6] transition-colors cursor-pointer"
              title="Copy query"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          <pre className="text-[10px] sm:text-[11px] text-white font-mono whitespace-pre overflow-auto max-h-[100px]">
            {queries.structured}
          </pre>
        </div>
      </div>
  </div>
  );
};

export default QuerySection;