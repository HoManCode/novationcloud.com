/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // add other options here
};

module.exports = nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
