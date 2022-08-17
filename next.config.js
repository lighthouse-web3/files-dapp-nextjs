/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cms.lighthouse.storage"],
  },
};

module.exports = nextConfig;
