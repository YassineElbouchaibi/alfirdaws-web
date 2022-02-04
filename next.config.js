/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com'],
  },
  publicRuntimeConfig: {
    cmsUri: 'http://localhost:1338/',
  },
};

module.exports = nextConfig;
