import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: [],
  },
  server: {
    port: 4000,
  },
};

export default nextConfig;
