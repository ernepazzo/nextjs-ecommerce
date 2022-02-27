/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: "http://localhost:3000",
    // "MONGODB_URL": "mongodb+srv://ernepazzo:3rn3st1c0.12@cluster0.ecxug.mongodb.net/nextjs-ecommerce?retryWrites=true&w=majority"
    MONGODB_URL: "mongodb://localhost:27017/nextjs-ecommerce",
  },
};

module.exports = nextConfig;
