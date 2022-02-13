/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'localhost'],
  },
  publicRuntimeConfig: {
    cmsUri: 'http://localhost:1338',
  },
};

module.exports = nextConfig;
