import type { NextConfig } from "next";

const repo = 'business-import'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig: NextConfig = {
	output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
	images: {
    loader: "akamai",
    path: "/",
  },
};

export default nextConfig;
