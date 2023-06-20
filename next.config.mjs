/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  distDir: "/nextjs-github-pages",
  images: { unoptimized: true },
  // assetPrefix: "https://motion-gpt.github.io/",
}

export default nextConfig
