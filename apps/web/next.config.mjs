/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        hostname: "assets.aceternity.com",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
    ],
  },
}
