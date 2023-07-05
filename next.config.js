/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: 'public',
  register: true,
  fallbacks: {
    document: '/~offline',
  }
});

module.exports = withPWA({
  reactStrictMode: true,
});