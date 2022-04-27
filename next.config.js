/** @type {import('next').NextConfig} */
const nextConfig = {
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
