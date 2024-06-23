/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/test-pages" : "",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  output: "export",
};

export default nextConfig;
