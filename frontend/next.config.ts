import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'br.web.img2.acsta.net',
      },
      {
        protocol: 'https',
        hostname: 'br.web.img3.acsta.net',
      },
    ],
  },
};

export default nextConfig;
