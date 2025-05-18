'use client';

import React, { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

export default function Modal({ isOpen, onClose, children, maxWidth = 'max-w-4xl' }: ModalProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(currentScroll);
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScroll}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      window.scrollTo(0, scrollPosition);
    }
    
    return () => {
      // Clean up in case component unmounts while modal is open
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen, scrollPosition]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Fixed overlay that covers the entire viewport */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0, 
          bottom: 0,
          height: '100vh',
          width: '100vw'
        }}
      >
        {/* The backdrop - with blur effect */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-md"
          onClick={onClose}
        />
        
        {/* The modal content - centered in viewport */}
        <div 
          className={`${maxWidth} w-full bg-gray-900 rounded-lg shadow-xl border border-[#52c4c6]/30 z-10 m-4 animate-fadeIn`}
          onClick={(e) => e.stopPropagation()}
          style={{ 
            maxHeight: 'calc(100vh - 4rem)',
            position: 'relative',
            margin: 'auto'
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

// Add simple animation for modal appearance
const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}