'use client';

import React, { useState, useEffect } from 'react';
import { useGlobalState } from '../../context/GlobalStateContext';
import { useToast } from '../../components/ui/Toast';

interface WebsitePreviewProps {
  imageSrc: string | null;
  isLoading?: boolean;
}

export default function WebsitePreview({ imageSrc, isLoading = false }: WebsitePreviewProps) {
  const { markdownResponse } = useGlobalState();
  const [activeTab, setActiveTab] = useState<'preview' | 'markdown'>('preview');
  const [copySuccess, setCopySuccess] = useState(false);
  const { showToast } = useToast();
  
  // When website is fetched, automatically switch to preview tab
  useEffect(() => {
    if (imageSrc && !isLoading) {
      setActiveTab('preview');
    }
  }, [imageSrc, isLoading]);

  // Reset copy success message after 2 seconds
  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

  const handleCopyMarkdown = () => {
    if (markdownResponse) {
      navigator.clipboard.writeText(markdownResponse)
        .then(() => {
          setCopySuccess(true);
          showToast('Markdown copied to clipboard', 'success');
        })
        .catch(err => {
          console.error('Failed to copy markdown:', err);
          showToast('Failed to copy markdown', 'error');
        });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <label className="text-[#52c4c6] text-xs font-medium">Website Content</label>
        
        <div className="flex items-center bg-gray-800/30 rounded-md border border-gray-700/50 p-0.5">
            <button
            type="button"
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1 text-xs rounded-sm transition-colors ${
              activeTab === 'preview' 
                ? "bg-[#52c4c6]/20 text-[#52c4c6]"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('markdown')}
            className={`px-3 py-1 text-xs rounded-sm transition-colors ${
              activeTab === 'markdown' 
                ? "bg-[#52c4c6]/20 text-[#52c4c6]"
                : "text-gray-400 hover:text-gray-300"
            } ${!markdownResponse ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!markdownResponse}
            aria-disabled={!markdownResponse}
            title={!markdownResponse ? "Fetch a website first to view Markdown" : ""}
          >
            Markdown
          </button>
          </div>
      </div>
      <div 
        className="relative h-[calc(9/16*100%)] min-h-[280px] sm:min-h-[320px] bg-gray-800/20 border border-gray-700/50 rounded-md overflow-hidden shadow-inner"
        style={{ aspectRatio: '16/9' }}
      >
        <div className="h-full w-full overflow-hidden custom-scrollbar">
          {isLoading && (
            <div className="absolute inset-0 animate-pulse">
              <div className="h-full w-full bg-gradient-to-r from-gray-800/30 via-gray-700/30 to-gray-800/30 shimmer-effect"></div>
            </div>
          )}
          
          {!isLoading && (
            <>
              {/* Website Preview Tab */}
              {activeTab === 'preview' && (
                <div className="h-full w-full overflow-auto" style={{ scrollbarWidth: 'none' }}>
                  <div className="w-full">
                    {imageSrc && (
                      <img 
                        src={imageSrc} 
                        alt="Website Preview" 
                        className="w-full h-auto"
                      />
                    )}
                  </div>
                </div>
              )}
              
              {/* Markdown Content Tab */}
              {activeTab === 'markdown' && (
                <div className="relative h-full w-full overflow-auto bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
                  {markdownResponse ? (
                    <>
                      <div className="sticky top-0 left-0 right-0 z-10 flex justify-end p-2 bg-gradient-to-b from-gray-100/90 to-transparent dark:from-gray-800/90">
                        <button
                          type="button"
                          onClick={handleCopyMarkdown}
                          className={`group px-3 py-1.5 rounded-md text-xs font-medium shadow-md transition-all duration-300 flex items-center gap-1.5 ${
                            copySuccess 
                              ? 'bg-green-500 text-white scale-105' 
                              : 'bg-gray-800 hover:bg-gray-700 hover:scale-105 hover:shadow-lg text-white border border-gray-700'
                          }`}
                          title="Copy markdown to clipboard"
                        >
                          {copySuccess ? (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:rotate-[-8deg] group-hover:scale-110 duration-300">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                              </svg>
                              <span className="group-hover:text-opacity-100">Copy Markdown</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="markdown-content p-2 pt-0 sm:p-4 sm:pt-0 text-xs sm:text-sm font-mono" style={{ whiteSpace: 'pre-wrap' }}>
                        {markdownResponse}
                      </div>
                    </>
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-gray-500">
                      <p>No markdown content available</p>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}