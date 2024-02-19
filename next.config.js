const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  //   mdxRs: true,
  //   serverComponentsExternalPackages: ["mongoose"],
  // },
  compiler: {
    reactRemoveProperties: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
