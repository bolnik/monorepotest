import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Netlify supports Next.js SSR, so we don't need static export
  experimental: {
    // Enable if you want to use experimental features
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_HOST: process.env.HOST,
    NEXT_PUBLIC_SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
  },
};

export default nextConfig;
