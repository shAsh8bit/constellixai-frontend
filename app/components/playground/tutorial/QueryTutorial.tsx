'use client';

import React from 'react';
import TutorialExample from './TutorialExample';
import { exampleJsonData } from '../../../utils/exampleData';

interface QueryTutorialProps {
  onClose: () => void;
  onUseExample: (exampleQuery: string) => void;
}

export default function QueryTutorial({ onClose, onUseExample }: QueryTutorialProps) {
  const basicQueryExample = `{
    products[] {
      name,
      price,
      description
    }
}`;

  const specifiedDataExample = `{
    products (only speakers and headphones)[] {
      name,
      price (less than 10000),
      inStock
    }
}`;

  const singleKeyDataExample = `{
    highly_rated_earphone (Get the name of the most highly rated bluetooth earphone)
}`;

  const multipleKeyDataExample = `{
    highly_rated_earphone (Get the name of the most highly rated bluetooth earphone),
    price
}`;

  const multiConditionExample = `{
    products (only electronics)[] {
      name,
      price,
      features[]
    }
}`;


  return (
    <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 10rem)' }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-[#52c4c6]">What are Structured Queries?</h2>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>

      <p className="text-gray-300 mb-6">Structured queries allow you to precisely define what data you want to retrieve using a GraphQL-like syntax. Below are examples of different query patterns with their corresponding results to give you an idea.</p>

      <div className="space-y-8">
        <TutorialExample
          title="Basic Data Selection"
          queryCode={basicQueryExample}
          jsonData={exampleJsonData.basicData}
          description="Retreives the list of object."
        />

        <TutorialExample
          title="Provide sepcifications for the data you want inside '( )' brackets"
          queryCode={specifiedDataExample}
          jsonData={exampleJsonData.specifiedData}
          description="Retrieves only products with price less than 10000 and only speakers and headphones."
        />

        <TutorialExample
          title="Single Key"
          queryCode={singleKeyDataExample}
          jsonData={exampleJsonData.singleKeyData}
          description="Retreives single key result."
        />

        <TutorialExample
          title="Multiple Keys"
          queryCode={multipleKeyDataExample}
          jsonData={exampleJsonData.multipleKeyData}
          description="Retrieves single object with multiple keys."
        />

        <TutorialExample
          title="Define your own Complex structured query based on your needs."
          queryCode={multiConditionExample}
          jsonData={exampleJsonData.multiConditionData}
          description=""
        />
      </div>
      
      <div className="mt-8 flex justify-end">
        <button
          onClick={() => onUseExample(basicQueryExample)}
          className="mr-3 px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
        >
          Use Basic Example
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm bg-[#52c4c6] text-black rounded hover:bg-[#52c4c6]/80 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}