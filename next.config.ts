import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true, // To enable caching
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true
  }
};

export default nextConfig;
