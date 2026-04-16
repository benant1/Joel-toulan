import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "izimentor.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "izimentor.com",
        pathname: "/fluent-community/**",
      },
    ],
  },
};

export default nextConfig;
