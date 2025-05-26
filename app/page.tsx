import WebQueryVisualizer from "./components/WebQueryVisualizer";
import IntegrationSection from "./components/home/IntegrationSection";
import PlaygroundButton from "./components/PlaygroundButton";

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
            <PlaygroundButton />
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
