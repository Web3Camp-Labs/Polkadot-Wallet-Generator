/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  assetPrefix: isProd ?'/Polkadot-Wallet-Generator':'',
}

module.exports = nextConfig
