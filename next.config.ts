/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // previously set to `true`, which caused a warning
  },
  images: {
    domains: ['readdy.ai'],
  },
};

module.exports = nextConfig;
