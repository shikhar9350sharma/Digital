/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This is the important one for you!
    // It tells Vercel: "Deploy even if I have small warnings like unused variables."
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;