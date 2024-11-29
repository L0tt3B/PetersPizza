import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Disable server-side image optimization
  },
};

export default nextConfig;
