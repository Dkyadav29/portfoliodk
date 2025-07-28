/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {},
  },
  images: {
    domains: ['readdy.ai'],
  },
};

module.exports = nextConfig;
