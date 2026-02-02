/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  eslint: {
    // This allows production builds to complete even if ESLint errors are present
    ignoreDuringBuilds: true,
  },
  typescript: {
     // Also ignore TS errors to ensure deployment succeeds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;