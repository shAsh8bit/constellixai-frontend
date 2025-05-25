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
          <h1 className="text-2xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#52c4c6] to-teal-400">
              AI Scraper (Data Extraction)
            </span>
          </h1>
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