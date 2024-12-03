import { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Disable server-side image optimization for GitHub Pages
  },
  basePath: isProduction ? "/PetersPizza" : "", // Apply basePath only in production
  assetPrefix: isProduction ? "/PetersPizza" : "", // Apply assetPrefix only in production
};

export default nextConfig;