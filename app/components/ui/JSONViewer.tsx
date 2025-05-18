'use client';

import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

interface JSONViewerProps {
  data: any;
  height?: string;
  className?: string;
  maxHeight?: string;
}

export default function JSONViewer({ 
  data, 
  height = 'auto', 
  maxHeight = '400px',
  className = '' 
}: JSONViewerProps) {
  const jsonString = JSON.stringify(data, null, 2);
  
  return (
    <div 
      className={`json-viewer rounded-md ${className}`} 
      style={{ 
        height, 
        maxHeight, 
        overflow: 'auto',
        position: 'relative'
      }}
    >
      <CodeMirror
        value={jsonString}
        extensions={[json()]}
        theme="dark"
        editable={false}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
          dropCursor: false,
          allowMultipleSelections: true,
          indentOnInput: false,
        }}
        style={{ 
          height: '100%',
          minHeight: '100px',
          width: '100%',
          backgroundColor: 'transparent',
          fontSize: '0.875rem',
        }}
        className="code-mirror-wrapper"
      />
    </div>
  );
}