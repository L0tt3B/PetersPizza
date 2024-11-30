import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Disable server-side image optimization for GitHub Pages
  },
  basePath: "/PetersPizza", // Replace 'repository-name' with your GitHub repository name
  assetPrefix: "/PetersPizza", // Same as above
};

export default nextConfig;
