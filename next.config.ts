import type { NextConfig } from "next";

// const repo = 'business-import'
// const assetPrefix = `/${repo}/`
// const basePath = `/${repo}`

module.exports = {
  output: 'export',
  trailingSlash: true,  // Recommended for static hosting
	images: {
    unoptimized: true,  // Глобально отключает оптимизацию для всех <Image>
  },
};

// export default nextConfig;
