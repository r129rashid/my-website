/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    localPatterns: [{ pathname: "/public/**" }],
  },
};

export default nextConfig;
