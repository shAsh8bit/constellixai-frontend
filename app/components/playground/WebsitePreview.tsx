'use client';

import React from 'react';

interface WebsitePreviewProps {
  imageSrc: string | null;
  isLoading?: boolean;
}

export default function WebsitePreview({ imageSrc, isLoading = false }: WebsitePreviewProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <label className="text-[#52c4c6] text-xs font-medium">Website Preview</label>
        <div className="h-7"></div>
      </div>
      <div 
        className="relative h-[calc(9/16*100%)] min-h-[320px] bg-gray-800/20 border border-gray-700/50 rounded-md overflow-hidden shadow-inner"
        style={{ aspectRatio: '16/9' }}
      >
        <div className="h-full w-full overflow-hidden custom-scrollbar">
          <div className="h-full w-full overflow-auto" style={{ scrollbarWidth: 'none' }}>
            {isLoading && (
              <div className="absolute inset-0 animate-pulse">
                <div className="h-full w-full bg-gradient-to-r from-gray-800/30 via-gray-700/30 to-gray-800/30 shimmer-effect"></div>
              </div>
            )}
            <div className="w-full">
              {(imageSrc && !isLoading) && (
                <img 
                  src={imageSrc} 
                  alt="Website Preview" 
                  className="w-full h-auto"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}