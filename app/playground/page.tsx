'use client';

import { useState } from "react";
import ControlPanel from "../components/playground/ControlPanel";
import QueryEditor from "../components/playground/QueryEditor";
import WebsitePreview from "../components/playground/WebsitePreview";
import ResultsPanel from "../components/playground/ResultsPanel";
import SubmitButton from "../components/playground/SubmitButton";
import QueryTutorial from "../components/playground/tutorial/QueryTutorial";
import Modal from "../components/ui/Modal";
import { captureScreenshot } from "../utils/screenshotService";
import { useToast } from "../components/ui/Toast";
import { useGlobalState } from "../context/GlobalStateContext";
import { extractData } from "../utils/dataExtractionService";

export default function Playground() {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("");
  const [model, setModel] = useState("gemini");
  const [apiKey, setApiKey] = useState("");
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingWebsite, setIsFetchingWebsite] = useState(false);
  const [queryMode, setQueryMode] = useState<'natural' | 'structured'>('structured');
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [showTutorial, setShowTutorial] = useState(false);
  const { setMarkdownResponse, markdownResponse } = useGlobalState();
  const { showToast } = useToast();
  
  const handleFetchWebsite = async () => {
    if (!url) {
      showToast("Please enter a URL", "error");
      return;
    }
    
    setIsFetchingWebsite(true);
    
    try {
      const screenshot = await captureScreenshot(url);
      
      if (screenshot) {
        setImageSrc(screenshot.screenshot);
        setMarkdownResponse(screenshot.markdown);
        showToast("Website fetched successfully", "success");
      }
    } catch (error: any) {
      console.error("Error capturing screenshot:", error);
      
      // Handle specific error types
      if (error.message === 'TOO_MANY_REQUESTS') {
        showToast("Our servers are currently handling many requests. Please wait a moment and try again.", "warning");
      } else if (error.message === 'SERVER_ERROR') {
        showToast("Oops! Something went wrong on our end. Please try again shortly.", "error");
      } else {
        showToast("Unable to fetch the website screenshot. Please verify the URL and try again.", "error");
      }
    } finally {
      setIsFetchingWebsite(false);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageSrc || !markdownResponse) {
      showToast("Please fetch the website first by clicking the 'Fetch Website' button", "warning");
      return;
    }
    
    if (!query) {
      showToast("Please enter a query", "warning");
      return;
    }

    if (!apiKey) {
      showToast("Please enter your API key", "warning");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const extractedData = await extractData(markdownResponse, query, apiKey);
      setResult(extractedData);
      showToast("Query processed successfully", "success");
    } catch (error) {
      console.error("Error processing query:", error);
      showToast("Error processing your query. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleShowTutorial = () => {
    setShowTutorial(true);
  };
  
  const handleTutorialClose = () => {
    setShowTutorial(false);
  };
  
  const handleUseExample = (exampleQuery: string) => {
    setQuery(exampleQuery);
    setShowTutorial(false);
  };
  
  return (
    <div className="bg-gradient-to-b from-black/90 to-gray-900/90 text-white min-h-screen backdrop-blur-lg">
      <main className="w-full max-w-[90rem] mx-auto px-4 py-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#52c4c6] to-teal-400">
                <span className="font-bold">Constellix</span><span className="font-extralight">AI</span> 
            </span>
          </h1>
          <p className="text-gray-300 mb-4 max-w-2xl mx-auto">Powerful AI tools for web data extraction and automation</p>
          
          <div className="flex justify-center w-full">
            <div className="mx-auto px-2 sm:px-0">
              <div className="relative inline-flex rounded-xl bg-gray-900/60 backdrop-blur-xl p-1.5 border border-gray-700/50 shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-30 rounded-xl"></div>
                
                {/* Data Extraction - Active Tab */}
                <div className="relative py-2 px-3 bg-gradient-to-br from-teal-600/90 via-teal-700/90 to-teal-900/90 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-teal-500/20 hover:shadow-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-xs sm:text-sm font-medium tracking-wide">AI Data Extraction</span>
                  </div>
                  <div className="flex justify-center mt-1">
                    <span className="text-xs text-teal-200 font-light px-1.5 py-0.5 bg-teal-900/40 rounded-full border border-teal-700/30">Demo version</span>
                  </div>
                </div>
                
                {/* AI Automation*/}
                <div 
                  className="relative py-2 px-3 bg-transparent rounded-lg transition-all duration-300 hover:bg-gray-800/70 cursor-pointer group"
                  onClick={() => window.open(`${process.env.NEXT_PUBLIC_INTEGRATION_NPM_URL}`, '_blank')}
                >
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide group-hover:text-white transition-colors duration-300">AI Automation</span>
                  </div>
                  <div className="mt-1 flex justify-center items-center">
                    <div className="flex items-center px-1.5 py-0.5 bg-amber-900/30 rounded-full border border-amber-700/30 text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                      <span className="text-xs mr-1">Full version on npm</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-md p-6 rounded-lg border border-gray-800/50 shadow-xl mb-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-25 md:gap-10">
            <ControlPanel 
              url={url}
              setUrl={setUrl}
              setQuery={setQuery}
              model={model}
              setModel={setModel}
              apiKey={apiKey}
              setApiKey={setApiKey}
              isLoading={isLoading}
              isFetchingWebsite={isFetchingWebsite}
              onFetchWebsite={handleFetchWebsite}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <QueryEditor 
                query={query}
                setQuery={setQuery}
                queryMode={queryMode}
                setQueryMode={setQueryMode}
                onShowTutorial={handleShowTutorial}
              />
              
              <WebsitePreview imageSrc={imageSrc} isLoading={isFetchingWebsite} />
            </div>
            </div>
            <SubmitButton isLoading={isLoading} isFetching={isFetchingWebsite}/>
          </form>
        </div>

        <ResultsPanel result={result} />
      </main>
      
      <Modal isOpen={showTutorial} onClose={handleTutorialClose}>
        <QueryTutorial 
          onClose={handleTutorialClose}
          onUseExample={handleUseExample}
        />
      </Modal>
    </div>
  );
}