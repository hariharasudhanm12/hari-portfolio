/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true },
  eslint: {
    // Prevent ESLint parsing warnings from failing Vercel production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
