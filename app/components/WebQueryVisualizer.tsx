"use client";

import React, { useState } from 'react';
import BrowserWindow from './WebQueryVisualizer/BrowserWindow';
import QuerySection from './WebQueryVisualizer/QuerySection';
import JsonResult from './WebQueryVisualizer/JsonResult';
import ConnectingLines from './WebQueryVisualizer/ConnectingLines';

const WebQueryVisualizer = () => {
  const [copied, setCopied] = useState(false);
  const [queryCopied, setQueryCopied] = useState(false);
  const [queryType, setQueryType] = useState<'natural' | 'structured'>('natural');
  
  const jsonData = {
    products: [
      {
        name: "Product 1",
        price: 29.99,
        description: "High quality item..."
      },
      {
        name: "Product 2",
        price: 49.99,
        description: "Premium product..."
      }
    ]
  };

  // Natural language and structured query examples
  const queries = {
    natural: "Get me all product prices and descriptions",
    structured: `{
  products[] {
    name,
    price,
    description
  }
}`
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonData, null, 2))
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); 
      })
      .catch(err => {
        console.error('Failed to copy JSON: ', err);
      });
  };

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(queries['structured'])
      .then(() => {
        setQueryCopied(true);
        setTimeout(() => setQueryCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy query: ', err);
      });
  };

  const setQueryTypeHandler = (type: 'natural' | 'structured') => {
    setQueryType(type);
  };

  return (
    <div className="w-full">
      <div className="relative w-full h-[550px] sm:h-[650px] md:h-[650px] p-2 sm:p-4">
        <BrowserWindow url="https://example.com/webpage" />
        
        <QuerySection 
          queryType={queryType as 'natural' | 'structured'} 
          queries={queries} 
          setQueryType={setQueryTypeHandler} 
          queryCopied={queryCopied} 
          handleCopyQuery={handleCopyQuery} 
        />
        
        <JsonResult 
          jsonData={jsonData} 
          copied={copied} 
          handleCopyJSON={handleCopyJSON} 
        />
        
        <ConnectingLines />
      </div>
    </div>
  );
};

export default WebQueryVisualizer;