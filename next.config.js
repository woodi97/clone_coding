/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pravatar.cc"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [],
  },
  reactStrictMode: true,
  webpack(config) {
    const prod = process.env.NODE_ENV === "production";
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    const plugins = [...config.plugins];
    return {
      ...config,
      mode: prod ? "production" : "development",
      plugins: plugins,
    };
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
