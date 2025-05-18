'use client';

import React, { useState } from 'react';
import JSONViewer from '../ui/JSONViewer';
import { useToast } from '../ui/Toast';

interface ResultsPanelProps {
  result: any;
  isLoading?: boolean;
}

export default function ResultsPanel({ result, isLoading = false }: ResultsPanelProps) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();
  
  const handleCopyResult = () => {
    const resultText = typeof result === 'object' 
      ? JSON.stringify(result, null, 2)
      : String(result);
      
    navigator.clipboard.writeText(resultText).then(() => {
      setCopied(true);
      showToast('Results copied to clipboard!', 'success');
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }).catch(err => {
      showToast('Failed to copy: ' + err.message, 'error');
    });
  };
  
  return (
    <div className="bg-gray-900/30 backdrop-blur-md p-6 rounded-lg border border-gray-800/50 shadow-xl">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-[#52c4c6] text-xs uppercase tracking-wider font-medium">Results</h3>
        
        {result && !isLoading && (
          <button
            onClick={handleCopyResult}
            className="bg-gray-800/70 hover:bg-gray-700/70 text-[#52c4c6] text-xs px-2 py-1 rounded flex items-center transition-colors"
            title="Copy result to clipboard"
          >
            {copied ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        )}
      </div>
      
      {isLoading ? (
        <div className="bg-gray-800/20 rounded-md p-5 text-center border border-gray-700/50">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-gray-700/50 mb-3"></div>
            <p className="text-gray-400 text-sm">Processing query...</p>
          </div>
        </div>
      ) : result ? (
        <div className="bg-gray-800/20 rounded-md border border-gray-700/50">
          {typeof result === 'object' ? (
            <JSONViewer 
              data={result} 
              maxHeight="500px"
            />
          ) : (
            <div className="p-4 text-sm">
              <p className="text-gray-300">{String(result)}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gray-800/20 rounded-md p-5 text-center border border-gray-700/50">
          <p className="text-gray-400 text-sm">Results will appear here</p>
        </div>
      )}
    </div>
  );
}