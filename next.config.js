/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
      },
      {
        protocol: "https",
        hostname:  "via.placeholder.com",
        port: ""
      }
    ],
  },
};

module.exports = nextConfig;
