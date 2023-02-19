/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public/serviceWorker',
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['localhost']
  }
});