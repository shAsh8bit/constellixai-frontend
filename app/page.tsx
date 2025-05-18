import WebQueryVisualizer from "./components/WebQueryVisualizer";
import IntegrationSection from "./components/home/IntegrationSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Top left ray of color */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-radial from-[#52c4c6]/40 to-transparent rounded-full blur-2xl opacity-30"></div>
      
      {/* Main Content */}
      <main className="container mx-auto py-10 md:py-20 flex max-h-screen flex-col lg:flex-row items-center justify-between max-w-7xl animate-fade-up px-6">
        <div className="w-full lg:w-2/5 space-y-6 md:space-y-8 mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="relative block">
              Simplifying{" "}
              <span className="relative inline-block">
                the Web
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#52c4c6] to-transparent rounded-full"></span>
              </span>
              <span className="absolute -z-10 top-1/2 -left-4 w-8 h-8 rounded-full bg-[#52c4c6]/10 blur-md"></span>
            </span>
          </h1>

          <div>
            <a
              href="/playground"
              className="group px-6 md:px-8 py-3 rounded-full 
              bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
              text-[#52c4c6] font-medium text-lg 
              transition-all duration-200 ease-in-out
              border border-[#52c4c6]/30
              shadow-md shadow-black/50
              inline-flex items-center gap-2"
            >
              <span>Try Playground</span>
              <svg 
                className="w-5 h-5 text-[#52c4c6] transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Visual component showing the app capability - now displays on mobile too */}
        <div className="w-full lg:w-[60%] flex justify-center animate-fade-up">
          <div className="w-full">
            <WebQueryVisualizer />
          </div>
        </div>
      </main>

      {/* Integration Section */}
      <IntegrationSection />
    </div>
  );
}
