import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      'br.web.img2.acsta.net', 
      'br.web.img3.acsta.net'
    ],
  },
};

export default nextConfig;
