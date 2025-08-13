/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this images configuration block
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**', // Allows any path from this hostname
      },
    ],
  },
};

module.exports = nextConfig;