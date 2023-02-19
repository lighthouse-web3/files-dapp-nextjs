/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self' cms.lighthouse.storage blob: data: gap:;
  script-src 'self' 'unsafe-eval';
  child-src lighthouse.storage;
  style-src 'self' lighthouse.storage 'unsafe-inline' 'unsafe-eval';
  font-src 'self' fonts.gstatic.com 'unsafe-inline';  
    style-src-elem 'self' fonts.googleapis.com 'unsafe-inline';
`;

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },

  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cms.lighthouse.storage"],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
