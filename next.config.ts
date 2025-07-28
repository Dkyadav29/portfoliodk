/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    domains: ['readdy.ai'],
  },
};

module.exports = nextConfig;
