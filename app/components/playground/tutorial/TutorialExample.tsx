'use client';

import React from 'react';
import JSONViewer from '../../ui/JSONViewer';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

interface TutorialExampleProps {
  title: string;
  queryCode: any; // Can be string or object
  jsonData: any;
  description: string;
}

export default function TutorialExample({ 
  title, 
  queryCode, 
  jsonData, 
  description 
}: TutorialExampleProps) {
  const queryString = typeof queryCode === 'object' ? 
    JSON.stringify(queryCode, null, 2) : 
    queryCode;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-white font-medium mb-2">{title}</h3>
        <div className="bg-gray-800/50 rounded-md shadow-inner font-mono text-sm" style={{ maxHeight: '200px', overflow: 'auto' }}>
          <CodeMirror
            value={queryString}
            extensions={[json()]}
            theme="dark"
            editable={false}
            basicSetup={{
              lineNumbers: false,
              foldGutter: false,
              dropCursor: false,
              allowMultipleSelections: false,
              indentOnInput: false,
            }}
            style={{ 
              height: '100%',
              backgroundColor: 'transparent',
              fontSize: '0.875rem'
            }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2">{description}</p>
      </div>
      <div>
        <h3 className="text-white font-medium mb-2">Example Result</h3>
        <div className="bg-gray-800/50 rounded-md shadow-inner overflow-hidden">
          <JSONViewer 
            data={jsonData} 
            maxHeight="200px"
          />
        </div>
      </div>
    </div>
  );
}