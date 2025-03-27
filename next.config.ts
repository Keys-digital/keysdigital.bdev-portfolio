import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensures static export (works better on Netlify)
  images: {
    unoptimized: true, // Disables Next.js image optimization (Netlify doesn't support it)
  },
};

export default nextConfig;
