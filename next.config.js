/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: 'public',
  register: true,
  cacheStartURL: true,
  fallbacks: {
    document: '/offline',
  }
});

module.exports = withPWA({
  reactStrictMode: true,
  poweredByHeader: false,
});