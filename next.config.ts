import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "imaf=ges.unsplash.com",
      },
      ],
    },
  }
  
export default nextConfig;
