'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of our global state
interface GlobalState {
  markdownResponse: string | null;
  setMarkdownResponse: (markdown: string | null) => void;
}

// Create the context with a default value
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// Provider component that wraps the app
export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // State variables
  const [markdownResponse, setMarkdownResponse] = useState<string | null>(null);


  // Value object that will be provided to consumers
  const value: GlobalState = {
    markdownResponse,
    setMarkdownResponse
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use the global state
export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};