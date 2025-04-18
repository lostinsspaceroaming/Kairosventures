/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['www.strobemedia.co.uk']
  }
}

module.exports = nextConfig 