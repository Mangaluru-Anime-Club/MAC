/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/MAC", // Replace with your repository name
  assetPrefix: "/MAC", // Replace with your repository name
  images: {
    unoptimized: true, // Required for GitHub Pages since server-side optimization is unavailable
  },
};

module.exports = nextConfig;
