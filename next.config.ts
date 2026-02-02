import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/congo-news',
  assetPrefix: '/congo-news/',
}

export default nextConfig
