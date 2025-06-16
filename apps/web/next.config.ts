import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Netlify supports Next.js SSR, so we don't need static export
  experimental: {
    // Enable if you want to use experimental features
  }
};

export default nextConfig;
