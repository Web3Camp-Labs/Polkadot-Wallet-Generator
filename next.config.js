/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  assetPrefix: isProd ?'/ETH-Wallet-Generator':'',
}

module.exports = nextConfig
