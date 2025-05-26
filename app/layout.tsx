import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ToastProvider } from "./components/ui/Toast";
import { GlobalStateProvider } from "./context/GlobalStateContext";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ConstellixAI",
  description: "Simplifying the Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white relative overflow-y-auto`}
      >
        <GlobalStateProvider>
          <ToastProvider>
            {/* Navbar - shared across pages */}
            <Navbar />

            {/* Main content area */}
            {children}
            {/* Google Analytics */}
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""} />
          </ToastProvider>
        </GlobalStateProvider>
      </body>
    </html>
  );
}
