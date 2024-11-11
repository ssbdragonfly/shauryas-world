/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 16777216,
    }
    return config
  },
}

module.exports = nextConfig
