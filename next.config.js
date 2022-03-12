/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb://localhost:27017/next-connect-mongodb",
  },
};

module.exports = nextConfig;
