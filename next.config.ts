/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- THIS IS REQUIRED FOR STATIC EXPORT
  images: {
    unoptimized: true, // Needed when using 'output: export' to disable image optimization
  },
};

module.exports = nextConfig;
