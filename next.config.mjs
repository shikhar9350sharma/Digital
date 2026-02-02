/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows the build to finish even if there are linting errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This allows the build to finish even if there are TS errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;