/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Matches the URL path (files in public/ are served from "/"), not the filesystem path
    localPatterns: [{ pathname: "/**" }],
  },
};

export default nextConfig;
